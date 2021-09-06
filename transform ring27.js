/* hungarian symbols
a = array
a2 = array of 2 values (pairs)
aa2 = array of array pairs
aapm = array of arrays of pointmaps
apm = array of pointmaps
b = boolean
but = button
col = column object (a set of tiles to add to the stack)
fn = function
i = index (of an array)
img = image
n = numeric
pm = pointmap: array of point as index & map as array
s = string
stack = stack object (a set of tiles)
*/

var nVec0x=0;
var nVec0y=0;
var nVec1x=0;
var nVec1y=1;
var aStackList = [];
var aStackUndone = [];
var nNgonSlider = null;
var nZoomSlider = null;
var butUndo;
var butRedo;
var butStackSvg;
var butStackPng;
var buRingSvg;
var butRingPng;
var nDecor=0;
var nStarAngle;

var TEST = 0;

var stack = {
	nCentMult : 1,
	nCurMult : 1,
	nNumPolys : 1,
	sInType : "S",
	sOutType : "",
	nTransX : 0,
	nTransY : 0,
	aa2Pts : [[0,-0.5]],
	aapmPolys : [[[0,[0,0]],[0,[0,1]]]],
	apmEdge : [[0,[0,0]]]
};

function fnBase() {
  nDecor = 0;
  nAngleSlider.hide();
  draw();
}

function fnStar() {
  nDecor = 1;
  nAngleSlider.show();
  draw();
}

function fnRosette() {
  nDecor = 2;
  nAngleSlider.hide();
  draw();
}

function fnRingPng() {
 var imgRing = get(195,100,605,400);
 save(imgRing, "myRing", "png");
}

function fnRingSvg() {
  fnDoRings(false);
}

function fnStackPng() {
 var imgStack = get(195,0,605,100);
 save(imgStack, "myStack", "png");
}

function fnStackSvg() {
  fnDoStack(false);
}

function fnRect2Polar(a2Rect) {
  var nX = a2Rect[0];
  var nY = a2Rect[1];
  var nRadius = sqrt(nX*nX+nY*nY);
  var nTheta;
  if (nX === 0) {
    if (nY < 0) { nTheta = 3*PI/2; }
      else { nTheta = PI/2;}
    } 
    else { nTheta = Math.atan(nY/nX);}
  if (nX < 0) {nTheta += PI;}
  if (nTheta < 0) {nTheta +=2*PI;}
  return [nRadius, nTheta];
}

function fnPolar2Rect(a2RadTheta) {
  return [a2RadTheta[0]*cos(a2RadTheta[1]),a2RadTheta[0]*sin(a2RadTheta[1])];
}

function fnAddPolar(apma2PolyRaw, a2CentPt) {
  var apma2a2PolyRawPolar = [];
  apma2PolyRaw.forEach(function(pma2PtMapRaw) {
    var nVecX = pma2PtMapRaw[2][0]-a2CentPt[0];
    var nVecY = pma2PtMapRaw[2][1]-a2CentPt[1];
    var a2VecPolar = fnRect2Polar([nVecX, nVecY]);
    apma2a2PolyRawPolar.push([pma2PtMapRaw[0],pma2PtMapRaw[1],pma2PtMapRaw[2],a2VecPolar]);
  });
  return apma2a2PolyRawPolar;
}

function fnPolyRaw2Cent(apma2PolyRaw) {
  var aa2RawPtList = [];
  apma2PolyRaw.forEach(function(pma2PtMapRaw) {
    aa2RawPtList.push(pma2PtMapRaw[2]);
  });
  var a2CentPt = fnAvePts(aa2RawPtList);
  return a2CentPt ;
}

function fnPolyAddRaw(apmPoly) {
  var apma2PolyRaw = [];
  apmPoly.forEach(function(pmPtMap) {
    var a2RawPt = fnMap(stack.aa2Pts[pmPtMap[0]],pmPtMap[1]);
    apma2PolyRaw.push([pmPtMap[0],pmPtMap[1],a2RawPt]);
  });
  return apma2PolyRaw;
}

function fnMap(a2Pt, aMap) {
  var nX = a2Pt[0]+aMap[0]*nVec0x +aMap[1]*nVec1x;
  var nY = a2Pt[1]+aMap[0]*nVec0y +aMap[1]*nVec1y;
  return  [nX,nY] ;
}

function fnAvePts(aa2Points) {
  var nXSum=0;
  var nYSum=0;
  aa2Points.forEach(function(a2Pt) {
    nXSum+= a2Pt[0];
    nYSum+= a2Pt[1];
  });
  nXSum /= aa2Points.length;
  nYSum /= aa2Points.length;
  return [nXSum, nYSum];
}

function fnAvePtMap(apmPtMaps) {
  var nXSum=0;
  var nYSum=0;
  apmPtMaps.forEach(function(pmPtMap) {
    var iPt = pmPtMap[0];
    var aMap = pmPtMap[1];
    var a2Pt = stack.aa2Pts[iPt];
    var a2NewPt = fnMap(a2Pt, aMap);
    nXSum+= a2NewPt[0];
    nYSum+= a2NewPt[1];
  });
  nXSum /= apmPtMaps.length;
  nYSum /= apmPtMaps.length;
  return [nXSum, nYSum];
}

function fnWeightPts(a2Center,nCentWt,a2Point,nVertWt) {
  var nX = (a2Center[0]*nCentWt+a2Point[0]*nVertWt)/(nCentWt+nVertWt);
  var nY = (a2Center[1]*nCentWt+a2Point[1]*nVertWt)/(nCentWt+nVertWt);
  return [nX,nY];
}

function fnComposeMaps(aaMaps) {
  var nMap0 = 0;
  var nMap1 = 0;
  aaMaps.forEach(function(aMap) {
    nMap0 += aMap[0];
    nMap1 += aMap[1];
  });
  return [nMap0, nMap1];
}

function fnUndo() {
  if (stack.sInType === "S") {fnSButtons();}
  if (stack.sInType === "LR") {fnLRButtons();}
  if (stack.sInType === "LLR") {fnLLRButtons();}
  if (stack.sInType === "LRR") {fnLRRButtons();}
  if (stack.sInType === "LLRR") {fnLLRRButtons();}
  if (stack.sInType === "LLRLR") {fnLLRLRButtons();}
  if (stack.sInType === "LRLRR") {fnLRLRRButtons();}
  aStackUndone.push(JSON.parse(JSON.stringify(stack)));
  stack = JSON.parse(JSON.stringify(aStackList.pop()));
  draw();
}

function fnRedo() {
  aStackList.push(JSON.parse(JSON.stringify(stack)));
  stack = JSON.parse(JSON.stringify(aStackUndone.pop()));
  if (stack===[]) {stack = JSON.parse(JSON.stringify(aStackList.pop()));}
  if (stack.sOutType === "S") {fnSButtons();}
  if (stack.sOutType === "LR") {fnLRButtons();}
  if (stack.sOutType === "LLR") {fnLLRButtons();}
  if (stack.sOutType === "LRR") {fnLRRButtons();}
  if (stack.sOutType === "LLRR") {fnLLRRButtons();}
  if (stack.sOutType === "LLRLR") {fnLLRLRButtons();}
  if (stack.sOutType === "LRLRR") {fnLRLRRButtons();}
  draw();
}

function fnHelp() {
//alert("Push buttons. Slide sliders.");
window.open("help.html", '_blank').focus();
}

function fnStoreStack() {
  /* this weird syntax is to make it clone stack including cloning all subarrays */
  aStackList.push(JSON.parse(JSON.stringify(stack)));
  aStackUndone = [];
}

function fnNgonChanged () {
  draw();
}

function fnZoomChanged () {
  draw();
}

function fnAngleChanged () {
  nStarAngle=nAngleSlider.value()*PI/180;
  draw();
}

function fnCheckDouble() {
  if (stack.nCurMult===1) {fnDoubleStack(); stack.nCurMult=2;stack.nCentMult=2;;}
}

  /* If the column is a double, we have to double anything earlier by double stacking it */
function fnDoubleStack() {
  /* double the points */
  stack.nNumPolys = stack.nNumPolys*2;
  stack.nTransX = stack.nTransX/2;
  stack.nTransY = stack.nTransY/2;
  var aa2NewStackPts = [];
  var aapmNewStackPolys= [];
  var nAddPt = stack.aa2Pts.length;
  stack.aa2Pts.forEach(function(a2Pt) {
    a2Pt[0]/=2;
    a2Pt[1]/=2;
    var aNewX = a2Pt[0];
    var aNewY = a2Pt[1]+0.5;
    aa2NewStackPts.push([aNewX,aNewY]);
  });
  stack.aa2Pts = stack.aa2Pts.concat(aa2NewStackPts);

  /* double the polygons */
  stack.aapmPolys.forEach(function(apmPoly) {
    var apmPoly1 = [];
    var apmPoly2 = [];
    apmPoly.forEach(function(pmPtMap) {
      var iPt = pmPtMap[0];
      var aMap = pmPtMap[1];
      var nTransVec1 = aMap[1];
      nNext = (floor(nTransVec1/2)===nTransVec1/2) ? 0:1;
      apmPoly1.push([iPt+nNext*nAddPt,[0,nTransVec1/2-0.5*nNext]]);
      apmPoly2.push([iPt+(1-nNext)*nAddPt,[0,nTransVec1/2+0.5*nNext]]);
    });
    aapmNewStackPolys.push(apmPoly1);
    aapmNewStackPolys.push(apmPoly2);
  });
  stack.aapmPolys = aapmNewStackPolys;

  /* double the edge */
  var apmEdge1=[];
  var apmEdge2=[];
  stack.apmEdge.forEach(function(pmPtMap) {
      iPt = pmPtMap[0];
      aMap = pmPtMap[1];
      nTransVec1 = aMap[1];
      nNext = (floor(nTransVec1/2)===nTransVec1/2) ? 0:1;
      apmEdge1.push([iPt+nNext*nAddPt,[0,nTransVec1/2-0.5*nNext]]);
      apmEdge2.push([iPt+(1-nNext)*nAddPt,[0,nTransVec1/2+0.5*nNext]]);
  });
  stack.apmEdge = apmEdge1.concat(apmEdge2);
} /* end fnDoubleStack() */

/* this one will aim to make the ring polygons regular */
function fnMakeRegular2() {
  var aia2PtVotes = [];
  stack.aapmPolys.forEach(function(apmPoly) {
    var apma2PolyRaw = fnPolyAddRaw2(apmPoly);
    var a2CentPt = fnPolyRaw2Cent(apma2PolyRaw);
    var apma2a2PolyRawPolar = fnAddPolar(apma2PolyRaw, a2CentPt);
    /* sort by descending angle so all polygons have same orientation */

    apma2a2PolyRawPolar.sort((A,B)=> B[3][1]-A[3][1]);
    aia2PtVotes = aia2PtVotes.concat(fnAvePolar2(apma2a2PolyRawPolar,a2CentPt));
  });
  /* sort point list by index */
  aia2PtVotes.sort((A,B) => A[0]-B[0]);
  var nCurPt = 0;
  var aa2VotesByPt = [];
  var aa2AvePtVote=[];

  /* average all votes for where to move the point */
  aia2PtVotes.forEach(function(ia2PtVote) {
    if (nCurPt === ia2PtVote[0]) {aa2VotesByPt.push(ia2PtVote[1]);}
    else { 
      aa2AvePtVote.push(fnAvePts(aa2VotesByPt));
      nCurPt = ia2PtVote[0];
      aa2VotesByPt = [ia2PtVote[1]];
      };
  });
  aa2AvePtVote.push(fnAvePts(aa2VotesByPt));

  /* remap ring point back to stack */
  var nN = floor(nNgonSlider.value());
  if (stack.nCentMult === 2) {nN = 2*int(nN/2+0.2) ;}
  /* stack.nCentMult tells what the center must be divisible by. It's always 1 or 2. */
  var nK=nN/stack.nCentMult;
  var nT=2*PI/nK;
  var nOldRad=nK/2/PI*10;
  var nOldTh = 0;
  var aa2NewStackPt = [];

  aa2AvePtVote.forEach(function(a2Point) {
    var nX = (a2Point[0]-400)*100/nZoomSlider.value()/stack.nCentMult;
    var nY = (a2Point[1]-300)*100/nZoomSlider.value()/stack.nCentMult;
    var a2RingPtPol = fnRect2Polar([nX,nY]);
    nX = log(a2RingPtPol[0]/nOldRad)/nT;
    nTheta2 = a2RingPtPol[1]-nOldTh;
    if (nTheta2 > PI) {nTheta2 -= 2*PI;}
    nY = (nTheta2)/nT;
    aa2NewStackPt.push([nX,nY]);
  });

  /* don't move the inner polygon points */
  var aia2FixedPts = [];
  for (nCounter = 0;nCounter<stack.aa2Pts.length;nCounter++) {
    if (stack.aa2Pts[nCounter][0]===0) {aia2FixedPts[nCounter]=[nCounter,stack.aa2Pts[nCounter]] }
  };
  stack.aa2Pts = aa2NewStackPt;
  aia2FixedPts.forEach(function(ia2FixedPt) {
    stack.aa2Pts[ia2FixedPt[0]]=ia2FixedPt[1];
  });
} /* end fnMakeRegular2 */

/* this will add the raw ring point data */
function fnPolyAddRaw2(apmPoly) {
  var nN = floor(nNgonSlider.value());
  if (stack.nCentMult === 2) {nN = 2*int(nN/2+0.2) ;}
  /* stack.nCentMult tells what the center must be divisible by. It's always 1 or 2. */
  var nK=nN/stack.nCentMult;
  var nT=2*PI/nK;
  var nOldRad=nK/2/PI*10;
  var apma2PolyRaw2 = [];
  var nOldTh = 0;
   
  apmPoly.forEach(function(pmPtMap) {
    var a2Pt = fnMap(stack.aa2Pts[pmPtMap[0]],pmPtMap[1]);
    var nTheta=a2Pt[1]*nT+nOldTh;
    var nRadius=nOldRad*exp(a2Pt[0]*nT);	
    var nNewTheta=nTheta; //+ nCounter*nT;
    var nX=nZoomSlider.value()/100*nRadius*cos(nNewTheta)*stack.nCentMult;
    var nY=nZoomSlider.value()/100*nRadius*sin(nNewTheta)*stack.nCentMult;
    apma2PolyRaw2.push([pmPtMap[0],pmPtMap[1],[nX+400,nY+300]]);
  });
  return apma2PolyRaw2;
} /* end fnPolyAddRaw2 */

function fnAvePolar2(apma2a2PolyRawPolar,a2CentPt) {
  var nRNew = 0;
  var nTBase = 0;
  var nVertNum = 0;
  var nNumVert = apma2a2PolyRawPolar.length;
  apma2a2PolyRawPolar.forEach(function(pma2a2PolyRawPolar) {
    nVertNum += 1;
    nRNew += pma2a2PolyRawPolar[3][0];
    var nAddBaseT = pma2a2PolyRawPolar[3][1] + nVertNum*2*PI/nNumVert;
    nAddBaseT %= (2*PI);
    nAddBaseT += (2*PI);
    nAddBaseT %= (2*PI);
    if (nAddBaseT>PI) {nAddBaseT -= (2*PI);}
    nTBase += nAddBaseT;
  });

  nTBase /= nNumVert;
  nRNew /= nNumVert;
  var aia2PtVotes = [];
  nVertNum = 0;
  apma2a2PolyRawPolar.forEach(function(pma2a2PolyRawPolar) {
    nVertNum += 1;
    var nTNew = nTBase - nVertNum*2*PI/nNumVert;

    var nNewVecX = a2CentPt[0] + nRNew*cos(nTNew)-400;
    var nNewVecY = a2CentPt[1] + nRNew*sin(nTNew)-300;

    if (pma2a2PolyRawPolar[1][1] === 0) { var a2NewPt = [nNewVecX,nNewVecY]; 
      } else {
      var a2NewVecRT = fnRect2Polar([nNewVecX,nNewVecY]);
      var nN = floor(nNgonSlider.value());
      if (stack.nCentMult === 2) {nN = 2*int(nN/2+0.2) ;}
      /* stack.nCentMult tells what the center must be divisible by. It's always 1 or 2. */
      var nK=nN/stack.nCentMult;
      var nT=2*PI/nK;
      a2NewVecRT[1] -= nT*pma2a2PolyRawPolar[1][1];
      var a2NewPt = fnPolar2Rect(a2NewVecRT);
      }
    aia2PtVotes.push([pma2a2PolyRawPolar[0],[a2NewPt[0]+400,a2NewPt[1]+300]]);
  });
  return (aia2PtVotes);
} /* end fnAvePolar2 */

/* add a column to the stack; */
function fnAddCol(colNow) {
  stack.sInType = colNow.sInType;
  stack.sOutType = colNow.sOutType;
  var nNumMult = stack.nCurMult/colNow.nMultiple;
  stack.nNumPolys += colNow.nNumPolys*nNumMult; 
  var nColNumPts = colNow.nNumOldPts+colNow.aa2NewPts.length;
  var nTotNum = nColNumPts*nNumMult;

  var apmColPtMap = [];
  for (nCounter1=0;nCounter1<nNumMult;nCounter1++) {
  
  /* put the new points from col into the apmColPtMap and the stack. */
    colNow.aa2NewPts.forEach(function(a2Pt) {
      apmColPtMap.push([stack.aa2Pts.length,[0,0]]);
      stack.aa2Pts.push([a2Pt[0]/stack.nCurMult+stack.nTransX,
         a2Pt[1]/stack.nCurMult+stack.nTransY+nCounter1/nNumMult]); 
    }); /* end a2Pt in colNow.aa2NewPts */

    /* put the old apmEdge points into apmColPtMap */
    for (nCounter2=0;nCounter2<colNow.nNumOldPts;nCounter2++) {
      var pmPtMap = stack.apmEdge[nCounter2+nCounter1*colNow.nNumOldPts];
      apmColPtMap.push(pmPtMap);
    } /* end nCounter2 loop */
  }; /* end nCounter1 loop */

  stack.apmEdge = [];

  function fnCol2Stack(pmPtMap) {
    var iPt = pmPtMap[0];
    var aMap = pmPtMap[1];
    var nTransVec1=aMap[1];
    var iNewPt = iPt + nTransVec1*nColNumPts+nColNumPts*nCounter1;
    var nOffset = floor(iNewPt/nTotNum);
    var aNewMap = [0,nOffset];

    /* this weird hack is to ensure iNewPt is a positive number modulo nTotNum */
    iNewPt %= nTotNum;
    iNewPt += nTotNum;
    iNewPt %= nTotNum;
    var pmPtMap2 = apmColPtMap[iNewPt];
    var iPt2 = pmPtMap2[0];
    var aMap2 = pmPtMap2[1];
    var aMap3 = fnComposeMaps([aNewMap, aMap2]);
    return ([iPt2,aMap3]);
  }

  for (nCounter1=0;nCounter1<nNumMult;nCounter1++) {

    /* put the col polygons into the stack */
    colNow.aapmPolys.forEach(function(apmPoly) {
      var apmNewPoly = [];
      apmPoly.forEach(function(pmPtMap) {
        var pmPtMap3 = fnCol2Stack(pmPtMap);
        apmNewPoly.push(pmPtMap3);
      }); /* end pmPtMap in apmPoly */
      stack.aapmPolys.push(apmNewPoly);
    }); /* end apmPoly in colNow.aapmPolys */

    /* put the col apmEdge into the stack */
    colNow.apmEdge.forEach(function(pmPtMap) {
      var pmPtMap3 = fnCol2Stack(pmPtMap);
      stack.apmEdge.push(pmPtMap3);
    }); /* end pmPtMap in colNow.apmEdge */

  }; /* end nCounter1 loop */

  /* reset the base translation vectors */
  var apmTransPts = [];
  colNow.apmTrans.forEach(function(pmPtMap) {
    var pmPtMap3 = fnCol2Stack(pmPtMap);
    apmTransPts.push(pmPtMap3);
  });
  var a2GreatPoint = fnAvePtMap(apmTransPts);
  stack.nTransX=a2GreatPoint[0];
  stack.nTransY=a2GreatPoint[1]-1;

  /* move the column to stay close to horizontal */
  var nTransYOffset = floor(stack.nTransY);
  stack.apmEdge.forEach(function(pmPtMap) {
    pmPtMap[1][1] -= nTransYOffset;
  });
  stack.nTransY -= nTransYOffset;

//  fnMakeRegular();
  fnMakeRegular2();
  fnMakeRegular2();
  fnMakeRegular2();
  fnMakeRegular2();
  fnMakeRegular2();
  fnMakeRegular2();


/* keep polygon centers between 0 and 1 */
  stack.aapmPolys.forEach(function(apmPoly) {
    var apma2PolyRaw = fnPolyAddRaw(apmPoly);
    var a2CentPt = fnPolyRaw2Cent(apma2PolyRaw);
    var nPolyYOffset = floor(a2CentPt[1]+0.0000001);
    apmPoly.forEach(function(pmPtMap) {
       pmPtMap[1][1] -= nPolyYOffset;
    });
  });

} /* end fnAddCol */

/* this does one polygon at a time to draw or save */
function fnDoPoly(bDraw,aa2Poly,asOutput) {
  switch (nDecor) {
    /* base */
    case 0:
      if (bDraw) {
        fill(255);
        strokeWeight(1);
        fnDrawPoly(aa2Poly);
      } else {
        fnSavePoly(aa2Poly,asOutput);
      }
      break;
    /* star */
    case 1:
      var a2Center = fnAvePts(aa2Poly);
      var a2LastPt = aa2Poly[aa2Poly.length-1];
      var aa2Star = [];
      var nNgon = aa2Poly.length;
      var nR = 1/(2*sin(PI/nNgon));
      var nH = 1/(2*tan(PI/nNgon));
      var nVertWt = nH*sin(nStarAngle/2)/sin(PI-nStarAngle/2-PI/nNgon);
      var nCentWt = nR - nVertWt;
      aa2Poly.forEach(function(a2Point) {     
        var a2MidPt = fnAvePts([a2Point, a2LastPt]);
        aa2Star.push(a2MidPt);
        var a2NewPt = fnWeightPts(a2Center,nCentWt,a2Point,nVertWt);
        aa2Star.push(a2NewPt);
        a2LastPt = a2Point;      
      });
  
      if (bDraw) {
        fill('purple');
        strokeWeight(0);
        fnDrawPoly(aa2Star);
      } else {
        fnSavePoly(aa2Star,asOutput);
      }
      break;

    /* rosette */
    case 2:
      var a2Center = fnAvePts(aa2Poly);
      var a2LastPt = aa2Poly[aa2Poly.length-1];
      var aa2Rose = [];   
      var nNgon = aa2Poly.length;
      switch (nNgon) {
        case 2:
          break;
        case 3:
          aa2Poly.forEach(function(a2Point) {     
            var a2MidPt = fnAvePts([a2Point, a2LastPt]);
            aa2Rose.push(a2MidPt);
            var a2NewPt = fnAvePts([a2Point, a2Center]);
            aa2Rose.push(a2NewPt);
            a2LastPt = a2Point;      
          });
          if (bDraw) {
            fill('purple');
            strokeWeight(0);
            fnDrawPoly(aa2Rose);
          } else {
            fnSavePoly(aa2Rose,asOutput);
          }
          break;
        case 4:
          aa2Poly.forEach(function(a2Point) {     
            var a2MidPt = fnAvePts([a2Point, a2LastPt]);
            aa2Rose.push(a2MidPt);
            var a2NewPt = fnWeightPts(a2Center,sqrt(2)-1,a2Point,1);
            aa2Rose.push(a2NewPt);
            a2LastPt = a2Point;      
          });
          if (bDraw) {

            fill('purple');
            strokeWeight(0);
            fnDrawPoly(aa2Rose);
          } else {
            fnSavePoly(aa2Rose,asOutput);
          }
          break;
        default:
          var nR = 1/(2*sin(PI/nNgon));
          var nH = 1/(2*tan(PI/nNgon));
          var nH2 = (nR-0.5)/(2*cos(PI/nNgon));

          aa2Poly.forEach(function(a2Point) {    
            var aa2Rose = [];  
            var a2MidPt = fnAvePts([a2Point, a2LastPt]);
            aa2Rose.push(a2MidPt);

            var a2AimPt = fnWeightPts(a2Center,0.25,a2LastPt,nH*nH);
            var a2NewPt = fnWeightPts(a2AimPt,nH,a2MidPt,0.5);
            aa2Rose.push(a2NewPt);

            var a2NewPt = fnWeightPts(a2Center,0.5,a2LastPt,nR-0.5);
            aa2Rose.push(a2NewPt);

            var a2NewPt = fnWeightPts(a2Center,nH-nH2 ,a2MidPt,nH2);
            aa2Rose.push(a2NewPt);  

            var a2NewPt = fnWeightPts(a2Center,0.5,a2Point,nR-0.5);
            aa2Rose.push(a2NewPt); 

            var a2AimPt = fnWeightPts(a2Center,0.25,a2Point,nH*nH);
            var a2NewPt = fnWeightPts(a2AimPt,nH,a2MidPt,0.5);
            aa2Rose.push(a2NewPt);  

            if (bDraw) {
              fill('purple');
              strokeWeight(0);
              fnDrawPoly(aa2Rose);
            } else {
              fnSavePoly(aa2Rose,asOutput);
            } 
            a2LastPt = a2Point;
          });

          break;
      } /* end rosette switch */
 
  } /* end nDecor switch */
} /* end fnDoPoly */

/* this draws one polygon */
function fnDrawPoly(aa2Poly) {
      beginShape();
      aa2Poly.forEach(function(a2Point) {
        vertex(a2Point[0],a2Point[1]);	
      });
      endShape(CLOSE);
}

/* this saves one polygon */
function fnSavePoly(aa2Poly,asOutput) {
  asOutput.push('<polygon points="'); 
  aa2Poly.forEach(function(pmPtMap) {
    var sPoint = " " + (pmPtMap[0]-195) + "," + (pmPtMap[1]);
    asOutput.push(sPoint);
  });
  if (nDecor === 0) {
    asOutput.push('" style="fill:none;stroke:black;stroke-width:1" />'); 
  } else {
    asOutput.push('" style="fill:purple;stroke:none;stroke-width:0" />'); 
  }
}

/* this calculates the polygons in the rings to draw or save */
function fnDoRings(bDraw) {
  /* set up for rings */
  var nN = floor(nNgonSlider.value());
  if (stack.nCentMult === 2) {nN = 2*int(nN/2+0.2) ;}
  /* stack.nCentMult tells what the center must be divisible by. It's always 1 or 2. */
  var nK=nN/stack.nCentMult;
  var nT=2*PI/nK;
  var nOldRad=nK/2/PI*10;
  var nOldTh=0;
  var asOutput = [];

  /* initialize draw or save */
  if (bDraw) {
    background(255);
    if (nDecor===0) { background(220);}
    fill(255);
  } else {
    asOutput.push('<svg height="500" width="600">');
  }

  /* find each polygon in the rings */
  stack.aapmPolys.forEach(function(apmPoly) {
    for (nCounter = 0;nCounter<nK;nCounter++) {
      var aa2Poly=[];  
      apmPoly.forEach(function(pmPtMap) {
        var iPt = pmPtMap[0];
        var aMap = pmPtMap[1];
        var a2Pt = fnMap(stack.aa2Pts[iPt],aMap);

        var nTheta=a2Pt[1]*nT+nOldTh;
        var nRadius=nOldRad*exp(a2Pt[0]*nT);	
        var nNewTheta=nTheta + nCounter*nT;
        var nX=nZoomSlider.value()/100*nRadius*cos(nNewTheta)*stack.nCentMult;
        var nY=nZoomSlider.value()/100*nRadius*sin(nNewTheta)*stack.nCentMult;
        aa2Poly.push([nX+400,nY+300]); 	
      });
      fnDoPoly(bDraw,aa2Poly,asOutput);
    } /* end nCounter loop */
  }); /*end rings */

  /* do center shape */
  switch (nDecor) {
    /* base */
    case 0:
      break;

    /* star */
    case 1:
      var aa2Star = [];
      var nR = 1/(2*sin(PI/nN));
      var nH = 1/(2*tan(PI/nN));
      var nVertWt = nH*sin(nStarAngle/2)/sin(PI-nStarAngle/2-PI/nN);
      var nRad1 = nOldRad*stack.nCentMult*nZoomSlider.value()/100;
      var nRad2 = (nVertWt)/nR*nRad1;

      for (nCounter = 0;nCounter<nN;nCounter++) {    
        var nTheta = nCounter*2*PI/nN;   
        var a2InPt = fnPolar2Rect([nRad2,nTheta-PI/nN]);
        aa2Star.push([a2InPt[0]+400,a2InPt[1]+300]);
        var a2OutPt = fnPolar2Rect([nRad1,nTheta]);
        aa2Star.push([a2OutPt[0]+400,a2OutPt[1]+300]);   
      }

      if (bDraw) {
        fill('purple');
        strokeWeight(0);
        fnDrawPoly(aa2Star);
      } else {
        fnSavePoly(aa2Star,asOutput);
      }
      break;

    /* rosette */
    case 2:

      var nTheta=2*PI/nN; 
      var nOldTh=0;
      var nH = 1/(2*tan(PI/nN));
      var nRad1 = nH*10*nZoomSlider.value()/100; 
      var nXLen=nRad1 *cos(nTheta);
      var nYLen=nRad1 * sin(nTheta);
      var nXNew=.75*nRad1 + 0.25*nXLen;
      var nYNew=.25 * nYLen;
      var nDist=sqrt(nYNew*nYNew + (nRad1-nXNew)**2);
      var nRad2=nRad1 - nDist/sqrt(3);
      var nRad3=nRad2/2;
      var nRad4=cos(nTheta/2)*nRad3 - sin(nTheta/2)*nRad3/tan(nTheta*2/2);

      for (nCounter = 0;nCounter<nN;nCounter++) {   
        var aa2Rose = []; 
        var a2NewPt = fnPolar2Rect([nRad1,nOldTh+nCounter*nTheta]);
        aa2Rose.push([a2NewPt[0]+400,a2NewPt[1]+300]);
        a2NewPt = fnPolar2Rect([nRad2,nTheta/4+nOldTh+nCounter*nTheta]);
        aa2Rose.push([a2NewPt[0]+400,a2NewPt[1]+300]);
        a2NewPt = fnPolar2Rect([nRad3,nTheta/2+nOldTh+nCounter*nTheta]);
        aa2Rose.push([a2NewPt[0]+400,a2NewPt[1]+300]);
        a2NewPt = fnPolar2Rect([nRad4,nOldTh+nCounter*nTheta]);
        aa2Rose.push([a2NewPt[0]+400,a2NewPt[1]+300]);
        a2NewPt = fnPolar2Rect([nRad3,-nTheta/2+nOldTh+nCounter*nTheta]);
        aa2Rose.push([a2NewPt[0]+400,a2NewPt[1]+300]);
        a2NewPt = fnPolar2Rect([nRad2,-nTheta/4+nOldTh+nCounter*nTheta]);
        aa2Rose.push([a2NewPt[0]+400,a2NewPt[1]+300]);

        if (bDraw) {
          fill('purple');
          strokeWeight(0);
          fnDrawPoly(aa2Rose);
        } else {
          fnSavePoly(aa2Rose,asOutput);
        }
      } 
      break;
  } /* end center shape */

  if (bDraw===false) {
    asOutput.push('</svg>');
    saveStrings(asOutput,"myRing","svg");
  }
} /* end fnDoRings */

/* this calculates the polygons in the stack (the strip at the top) to draw or save */
function fnDoStack(bDraw) {

  /* initialize draw or save */
  var asOutput = [];  
  if (bDraw) {
    fill(255);
    if (nDecor===0) { fill(220);}
    rect(195,0,windowWidth,100);
  } else {
   asOutput.push('<svg height="500" width="600">');
  } 

  /* find each polygon in stack */
  stack.aapmPolys.forEach(function(apmPoly) {
    var aa2Poly=[];  
    apmPoly.forEach(function(pmPtMap) {
      var iPt = pmPtMap[0];
      var aMap = pmPtMap[1];  
      var a2Pt = fnMap(stack.aa2Pts[iPt],aMap);
      aa2Poly.push([40*a2Pt[0]+200,40*a2Pt[1]+30]);
    });
    fnDoPoly(bDraw,aa2Poly,asOutput);
  }); /* end stack */

  if (bDraw===false) {
    asOutput.push('</svg>');
    saveStrings(asOutput,"myStack","svg");
  }
} /* end fnDoStack */

function setup() {
  createCanvas( windowWidth, windowHeight );
  fnCreateButtons();
  nStarAngle=PI/3;
}

function draw() {
  var bDraw = true;
  fnDoRings(bDraw);

  /* hide the rings where we will put the buttons */
  fill(190);
  strokeWeight(0);
  rect(0,0,195,windowHeight);

  /* divide up our canvas */
  strokeWeight(1);
  line(195,0,195,windowHeight);
  line(195,100,windowWidth,100);

  /* radio buttons for nDecor */
  fill(255);
  circle(30,5,9);
  circle(70,5,9);
  circle(110,5,9);
  fill(0);
  switch (nDecor) {
    case 0:
      circle(30,5,4);
      break;
    case 1:
      circle(70,5,4);
      break;
    case 2:
      circle(110,5,4);
  };

  /* labels for sliders */
  fill(255);
  strokeWeight(1);
  rect(207,105,50,14);
  rect(397,105,80,14);
  if (nDecor===1) {rect(567,105,135,14);}

  fill(0);
  text("n=", 210,107,230,150);
  var nN = floor(nNgonSlider.value());
  if (stack.nCentMult === 2) {nN = 2*int(nN/2+0.2) ;}
  text(nN, 230,107,310,200);

  text("Zoom=", 400,107,440,150);
  text(nZoomSlider.value()+"%", 440,107,500,150);

  if (nDecor===1) {
    text("Angle=", 570,107,630,150);
    text(nAngleSlider.value(), 620,107,660,150);
    text("degrees", 650,107,690,150);
  }

  text("v.1.27", 20,530,50,550);

  fnDoStack(bDraw);

 noLoop();

}