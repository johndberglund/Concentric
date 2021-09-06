var col3e = { 
  nNumPolys : 1,
  sInType : "S",
  sOutType : "LR",
  nMultiple : 1,
  aa2NewPts : [[0.866,0]],
  nNumOldPts : 1,
  aapmPolys : [
    	[[0,[0,0]],[1,[0,0]],[1,[0,1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,1]]]
};
var butCol3e;
function fnSetCol3e() {fnStoreStack();fnAddCol(col3e);fnLRButtons();draw();}

var col3e2 = { 
  nNumPolys : 1,
  sInType : "S",
  sOutType : "LRR",
  nMultiple : 2,
  aa2NewPts : [[0.866,0]],
  nNumOldPts : 2,
  aapmPolys : [
    	[[0,[0,0]],[1,[0,0]],[2,[0,0]]]
  ],
  apmEdge : [[0,[0,0]],[2,[0,0]],[1,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]]]
};
var butCol3e2;
function fnSetCol3e2() {fnStoreStack();fnCheckDouble();fnAddCol(col3e2);fnLRRButtons();draw();}

var col3e33333o = { 
  nNumPolys : 6,
  sInType : "LRR",
  sOutType : "LLR",
  nMultiple : 2,
  aa2NewPts : [[0.854,2],[0.854,1.268],[.488,0.634]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[3,[0,1]]],
    [[1,[0,0]],[5,[0,0]],[3,[0,1]]],
    [[1,[0,0]],[2,[0,0]],[5,[0,0]]],
    [[2,[0,0]],[4,[0,0]],[5,[0,0]]],
    [[2,[0,0]],[3,[0,0]],[4,[0,0]]],
    [[2,[0,0]],[0,[0,-1]],[3,[0,0]]]
  		],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[0,[0,0]],[1,[0,0]],[2,[0,1]]]
};
var butCol3e33333o;
function fnSetCol3e33333o() {fnStoreStack();fnCheckDouble();fnAddCol(col3e33333o);fnLLRButtons();draw();}

var col3e33v = { 
  nNumPolys : 3,
  sInType : "LRR",
  sOutType : "S",
  nMultiple : 2,
  aa2NewPts : [[.577,1]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]]],
    [[0,[0,0]],[2,[0,0]],[3,[0,0]]],
    [[0,[0,0]],[3,[0,0]],[1,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]]],
  apmTrans : [[1,[0,0]],[0,[0,0]]]
};
var butCol3e33v;
function fnSetCol3e33v() {fnStoreStack();fnCheckDouble();fnAddCol(col3e33v);fnSButtons();draw();}

var col3e44o2 = { 
  nNumPolys : 3,
  sInType : "LLRR",
  sOutType : "LRLRR",
  nMultiple : 2,
  aa2NewPts : [[.598,1.464],[.33,1],[.598,.536]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[6,[0,0]],[3,[0,1]]],
    [[1,[0,0]],[5,[0,0]],[6,[0,0]]],
    [[1,[0,0]],[2,[0,0]],[4,[0,0]],[5,[0,0]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[0,[0,0]],[3,[0,1]],[4,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,1]],[4,[0,0]]]
};
var butCol3e44o2;
function fnSetCol3e44o2() {fnStoreStack();fnCheckDouble();fnAddCol(col3e44o2);fnLRLRRButtons();draw();}

var col3e44o3v = { 
  nNumPolys : 4,
  sInType : "LRR",
  sOutType : "LLR",
  nMultiple : 2,
  aa2NewPts : [[0.451,1],[.817,.366],[.817,-.366]],
  nNumOldPts : 3,
  aapmPolys : [
    	[[1,[0,0]],[2,[0,0]],[3,[0,0]]],
	[[0,[0,0]],[1,[0,0]],[3,[0,0]],[4,[0,0]]],
	[[0,[0,0]],[4,[0,0]],[5,[0,0]]],
	[[0,[0,0]],[5,[0,0]],[3,[0,1]],[2,[0,1]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[0,[0,0]]],
  apmTrans : [[0,[0,0]],[0,[0,-1]],[1,[0,0]],[1,[0,0]],[2,[0,0]],[2,[0,0]]]
};
var butCol3e44o3v;
function fnSetCol3e44o3v() {fnStoreStack();fnCheckDouble();fnAddCol(col3e44o3v);fnLLRButtons();draw();}

var col3e44o6e533v = { 
 nNumPolys : 7,
  sInType : "LLRR",
  sOutType : "S",
  nMultiple : 2,
  aa2NewPts : [[1.062,1.25],[1.062,.75],[1.062,.25],[1.062,-.25],[.598,1.464],[.330,1],[.598,.536]],
  nNumOldPts : 4,
  aapmPolys : [
  	[[0,[0,0]],[1,[0,0]],[6,[0,0]],[5,[0,0]],[4,[0,0]]],
	[[1,[0,0]],[2,[0,0]],[6,[0,0]]],
	[[2,[0,0]],[3,[0,0]],[4,[0,-1]],[7,[0,0]],[8,[0,0]],[6,[0,0]]],
	[[3,[0,0]],[0,[0,-1]],[4,[0,-1]]],
	[[5,[0,0]],[6,[0,0]],[8,[0,0]],[9,[0,0]]],
	[[5,[0,0]],[9,[0,0]],[10,[0,0]]],
	[[4,[0,0]],[5,[0,0]],[10,[0,0]],[7,[0,1]]]
  ],
  apmEdge : [[3,[0,0]],[2,[0,0]],[1,[0,0]],[0,[0,0]]],
  apmTrans : [[2,[0,0]],[3,[0,0]]]
};
var butCol3e44o6e533v;
function fnSetCol3e44o6e533v() {fnStoreStack();fnCheckDouble();fnAddCol(col3e44o6e533v);
stack.nCurMult*=2;fnSButtons();draw();}

var col3v = { 
  nNumPolys : 1,
  sInType : "LR",
  sOutType : "S",
  nMultiple : 1,
  aa2NewPts : [],
  nNumOldPts : 2,
  aapmPolys : [
    	[[0,[0,0]],[1,[0,0]],[0,[0,1]]]
  ],
  apmEdge : [[0,[0,0]]],
  apmTrans : [[0,[0,0]],[0,[0,1]]]
};
var butCol3v;
function fnSetCol3v() {fnStoreStack();fnAddCol(col3v);fnSButtons();draw();}

var col3v2 = { 
  nNumPolys : 1,
  sInType : "LLR",
  sOutType : "S",
  nMultiple : 2,
  aa2NewPts : [],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,-1]],[2,[0,-1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,0]]],
  apmTrans : [[0,[0,0]],[1,[0,0]]]
};
var butCol3v2;
function fnSetCol3v2() {fnStoreStack();fnCheckDouble();fnAddCol(col3v2);fnSButtons();draw();}

var col33e3v = { 
  nNumPolys : 2,
  sInType : "S",
  sOutType : "LLR",
  nMultiple : 2,
  aa2NewPts : [[.866,1],[.866,0]],
  nNumOldPts : 2,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[3,[0,0]]],
    [[1,[0,0]],[2,[0,0]],[3,[0,0]]],
    [[0,[0,0]],[3,[0,0]],[2,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,0]],[2,[0,1]],[2,[0,0]]]
};
var butCol33e3v;
function fnSetCol33e3v() {fnStoreStack();fnCheckDouble();fnAddCol(col33e3v);fnLLRButtons();draw();}

var col33o = { 
  nNumPolys : 2,
  sInType : "LR",
  sOutType : "LR",
  nMultiple : 1,
  aa2NewPts : [[.433,.5]],
  nNumOldPts : 2,
  aapmPolys : [
    	[[0,[0,0]],[1,[0,0]],[2,[0,0]]],
    	[[0,[0,0]],[2,[0,0]],[1,[0,1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,1]],[1,[0,0]]]
};
var butCol33o;
function fnSetCol33o() {fnStoreStack();fnAddCol(col33o);fnLRButtons();draw();}

var col33o2 = { 
  nNumPolys : 2,
  sInType : "LLR",
  sOutType : "LRR",
  nMultiple : 2,
  aa2NewPts : [[.488,-1]],
  nNumOldPts : 3,
  aapmPolys : [
    	[[0,[0,0]],[1,[0,0]],[3,[0,-1]]],
    	[[0,[0,0]],[3,[0,-1]],[2,[0,-1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,0]],[2,[0,0]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,-1]]]
};
var butCol33o2;
function fnSetCol33o2() {fnStoreStack();fnCheckDouble();fnAddCol(col33o2);fnLRRButtons();draw();}

var col33o33v = { 
  nNumPolys : 4,
  sInType : "LR",
  sOutType : "S",
  nMultiple : 1,
  aa2NewPts : [[0.433,.75],[.433,.25]],
  nNumOldPts : 2,
  aapmPolys : [
    	[[0,[0,0]],[3,[0,0]],[2,[0,1]]],
    	[[0,[0,0]],[1,[0,0]],[3,[0,0]]],
    	[[1,[0,0]],[2,[0,0]],[3,[0,0]]],
    	[[1,[0,0]],[0,[0,-1]],[2,[0,0]]]
  ],
  apmEdge : [[0,[0,-1]],[1,[0,0]]],
  apmTrans : [[0,[0,-1]],[1,[0,0]]]
};
var butCol33o33v;
function fnSetCol33o33v() {fnStoreStack();fnAddCol(col33o33v);stack.nCurMult*=2;fnSButtons();draw();}

var col4e = { 
  nNumPolys : 1,
  sInType : "S",
  sOutType : "S",
  nMultiple : 1,
  aa2NewPts : [[1,-.5]],
  nNumOldPts : 1,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[1,[0,1]],[0,[0,1]]]
  ],
  apmEdge : [[0,[0,0]]],
  apmTrans : [[0,[0,0]],[0,[0,1]]]
};
var butCol4e;
function fnSetCol4e() {fnStoreStack();fnAddCol(col4e);fnSButtons();draw();}

var col4e2 = { 
  nNumPolys : 1,
  sInType : "S",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[1,.5],[1,-.5]],
  nNumOldPts : 2,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[3,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]]]
};
var butCol4e2;
function fnSetCol4e2() {fnStoreStack();fnCheckDouble();fnAddCol(col4e2);fnLLRRButtons();draw();}

var col4e3v = { 
  nNumPolys : 2,
  sInType : "S",
  sOutType : "S",
  nMultiple : 1,
  aa2NewPts : [[.6288, .25],[.6288, -.25]],
  nNumOldPts : 1,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[2,[0,1]]],
    [[0,[0,0]],[2,[0,1]],[1,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]]],
  apmTrans : [[0,[0,0]],[1,[0,0]]]
};
var butCol4e3v;
function fnSetCol4e3v() {fnStoreStack();fnAddCol(col4e3v);stack.nCurMult*=2;fnSButtons();alert("Warning: rapid doubling");draw();}

var col4e33o = { 
  nNumPolys : 3,
  sInType : "LRR",
  sOutType : "LLR",
  nMultiple : 2,
  aa2NewPts : [[0.61,1.366],[0.61,0.634]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[3,[0,0]],[4,[0,0]]],
    [[1,[0,0]],[2,[0,0]],[3,[0,0]]],
    [[0,[0,0]],[4,[0,0]],[2,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,0]],[2,[0,0]],[2,[0,1]],]
};
var butCol4e33o;
function fnSetCol4e33o() {fnStoreStack();fnCheckDouble();fnAddCol(col4e33o);fnLLRButtons();draw();}

var col4e33o2 = { 
  nNumPolys : 3,
  sInType : "LLRR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[0.402,1.268],[0.402,0.732]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[4,[0,0]],[5,[0,0]]],
    [[1,[0,0]],[3,[0,0]],[4,[0,0]]],
    [[0,[0,0]],[5,[0,0]],[2,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]],[3,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[3,[0,0]],[2,[0,1]]]
};
var butCol4e33o2;
function fnSetCol4e33o2() {fnStoreStack();fnCheckDouble();fnAddCol(col4e33o2);fnLLRRButtons();draw();}

var col4v = { 
  nNumPolys : 1,
  sInType : "LR",
  sOutType : "LR",
  nMultiple : 1,
  aa2NewPts : [[.75,.5]],
  nNumOldPts : 2,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[1,[0,1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,1]]]
};
var butCol4v;
function fnSetCol4v() {fnStoreStack();fnAddCol(col4v);fnLRButtons();draw();}

var col4v2 = { 
  nNumPolys : 1,
  sInType : "LLR",
  sOutType : "LRR",
  nMultiple : 2,
  aa2NewPts : [[.781,-1]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[2,[0,-1]],[3,[0,-1]],[1,[0,0]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,0]],[2,[0,0]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,-1]]]
};
var butCol4v2;
function fnSetCol4v2() {fnStoreStack();fnCheckDouble();fnAddCol(col4v2);fnLRRButtons();draw();}

var col433oA = { 
  nNumPolys : 3,
  sInType : "LR",
  sOutType : "LR",
  nMultiple : 1,
  aa2NewPts : [[.433,.634],[.566,.134]],
  nNumOldPts : 2,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]]],
    [[0,[0,0]],[3,[0,0]],[2,[0,1]]],
    [[0,[0,0]],[2,[0,1]],[1,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]]],
  apmTrans : [[0,[0,0]],[0,[0,-1]],[1,[0,0]],[1,[0,0]]]
};
var butCol433oA;
function fnSetCol433oA() {fnStoreStack();fnAddCol(col433oA);fnLRButtons();draw();}

var col433oB = { 
  nNumPolys : 3,
  sInType : "LR",
  sOutType : "LR",
  nMultiple : 1,
  aa2NewPts : [[.433,.366],[.566,-.134]],
  nNumOldPts : 2,
  aapmPolys : [
    [[0,[0,0]],[3,[0,0]],[2,[0,1]],[1,[0,1]]],
    [[0,[0,0]],[1,[0,0]],[2,[0,0]]],
    [[0,[0,0]],[2,[0,0]],[3,[0,0]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]]],
  apmTrans : [[0,[0,0]],[0,[0,-1]],[1,[0,0]],[1,[0,0]]]
};
var butCol433oB;
function fnSetCol433oB() {fnStoreStack();fnAddCol(col433oB);fnLRButtons();draw();}

var col5e = { 
  nNumPolys : 1,
  sInType : "S",
  sOutType : "LR",
  nMultiple : 1,
  aa2NewPts : [[1.1,0],[.65,-.5]], 
  nNumOldPts : 1,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[2,[0,1]],[1,[0,1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,1]],[1,[0,0]]]
};
var butCol5e;
function fnSetCol5e() {fnStoreStack();fnAddCol(col5e);fnLRButtons();draw();}

var col5e2 = { 
  nNumPolys : 1,
  sInType : "LLRR",
  sOutType : "LRR",
  nMultiple : 2,
  aa2NewPts : [[0.812,1]], 
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[1,[0,1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,1]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,1]],[2,[0,0]]]
};
var butCol5e2;
function fnSetCol5e2() {fnStoreStack();fnCheckDouble();fnAddCol(col5e2);fnLRRButtons();draw();}

var col5e5v = { 
  nNumPolys : 2,
  sInType : "LRLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.671,1],[.896,.309],[.896,-.309]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[5,[0,0]],[6,[0,0]],[7,[0,0]],[3,[0,1]]],
    [[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[5,[0,0]],[0,[0,0]],[3,[0,1]]],
  apmTrans : [[1,[0,0]],[2,[0,0]],[3,[0,0]],[5,[0,0]],[0,[0,0]],
              [1,[0,0]],[2,[0,0]],[3,[0,0]],[5,[0,0]],[0,[0,-1]]]
};
var butCol5e5v;
function fnSetCol5e5v() {fnStoreStack();fnCheckDouble();fnAddCol(col5e5v);fnLLRLRButtons();draw();}

var col5v = { 
  nNumPolys : 1,
  sInType : "LR",
  sOutType : "LLR",
  nMultiple : 1,
  aa2NewPts : [[.769,.809],[.769,.191]], 
  nNumOldPts : 2,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[2,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,0]],[2,[0,0]],[2,[0,1]]]
};
var butCol5v;
function fnSetCol5v() {fnStoreStack();fnAddCol(col5v);stack.nCurMult*=2;fnLLRButtons();draw();}

var col5v2 = { 
  nNumPolys : 1,
  sInType : "LLR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[.876,1.382],[.876,.618]], 
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[3,[0,0]],[4,[0,0]],[2,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]],[3,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,1]],[3,[0,0]]]
};
var butCol5v2;
function fnSetCol5v2() {fnStoreStack();fnCheckDouble();fnAddCol(col5v2);fnLLRRButtons();draw();}

var col5v6o5eA = { 
  nNumPolys : 3,
  sInType : "LLRLR",
  sOutType : "LRLRR",
  nMultiple : 2,
  aa2NewPts : [[.56,.854],[.56,.382],[.838,0],[.560,-.382],[.838,-.764]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[6,[0,0]],[7,[0,0]],[8,[0,0]]],
    [[1,[0,0]],[2,[0,0]],[3,[0,0]],[5,[0,0]],[6,[0,0]]],
    [[3,[0,0]],[4,[0,0]],[0,[0,-1]],[8,[0,-1]],[9,[0,-1]],[5,[0,0]]]
  ],
  apmEdge : [[4,[0,0]],[3,[0,0]],[2,[0,0]],[1,[0,0]],[0,[0,0]]],
  apmTrans : [[0,[0,-1]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]]]
};
var butCol5v6o5eA;
function fnSetCol5v6o5eA() {fnStoreStack();fnCheckDouble();fnAddCol(col5v6o5eA);fnLRLRRButtons();draw();}

var col5v6o5eB = { 
  nNumPolys : 3,
  sInType : "LLRLR",
  sOutType : "LRLRR",
  nMultiple : 2,
  aa2NewPts : [[.56,1.146],[.838,.764],[.56,.382],[.838,0],[.560,-.382]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[6,[0,0]],[7,[0,0]],[8,[0,0]]],
    [[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]]],
    [[4,[0,0]],[0,[0,-1]],[8,[0,-1]],[9,[0,-1]],[5,[0,0]]]
  ],
  apmEdge : [[3,[0,0]],[2,[0,0]],[1,[0,0]],[0,[0,0]],[4,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]]]
};
var butCol5v6o5eB;
function fnSetCol5v6o5eB() {fnStoreStack();fnCheckDouble();fnAddCol(col5v6o5eB);fnLRLRRButtons();draw();}

var col55o2e = { 
  nNumPolys : 2,
  sInType : "LLRLR",
  sOutType : "LRLRR",
  nMultiple : 2,
  aa2NewPts : [[.594,1.464],[.443,1],[.594,.533]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[6,[0,0]],[7,[0,0]],[3,[0,1]]],
    [[1,[0,0]],[2,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[0,[0,0]],[3,[0,1]],[4,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[4,[0,0]],[3,[0,1]]]
};
var butCol55o2e;
function fnSetCol55o2e() {fnStoreStack();fnCheckDouble();fnAddCol(col55o2e);fnLRLRRButtons();draw();}

var col57v = { 
  nNumPolys : 2,
  sInType : "LR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[.793,1.207],[1.207,.793],[1.207,.207],[.793,-.207]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]]],
    [[3,[0,1]],[0,[0,0]],[6,[0,0]],[7,[0,0]],[4,[0,1]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[0,[0,0]],[3,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]]]
};
var butCol57v;
function fnSetCol57v() {fnStoreStack();fnCheckDouble();fnAddCol(col57v);fnLLRRButtons();draw();}

var col6e = { 
  nNumPolys : 1,
  sInType : "LRR",
  sOutType : "LLR",
  nMultiple : 2,
  aa2NewPts : [[1.443, 1.5],[1.443, .5]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[2,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,0]],[2,[0,0]],[2,[0,1]]]
};
var butCol6e;
function fnSetCol6e() {fnStoreStack();fnCheckDouble();fnAddCol(col6e);fnLLRButtons();draw();}

var col6e2 = { 
  nNumPolys : 1,
  sInType : "LLRR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[.866,1.333],[.866,.667]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[2,[0,1]]]
  		],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]],[3,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,1]],[3,[0,0]]]
};
var butCol6e2;
function fnSetCol6e2() {fnStoreStack();fnCheckDouble();fnAddCol(col6e2);fnLLRRButtons();draw();}

var col6e533v = { 
  nNumPolys : 4,
  sInType : "LRLRR",
  sOutType : "S",
  nMultiple : 2,
  aa2NewPts : [[.735,.75],[.735,.25],[.735,-.25],[.735,-.75]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[6,[0,0]]],
    [[1,[0,0]],[2,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]]],
    [[2,[0,0]],[3,[0,0]],[4,[0,0]]],
    [[4,[0,0]],[3,[0,0]],[0,[0,-1]],[6,[0,-1]],[7,[0,-1]],[8,[0,-1]]]
  ],
  apmEdge : [[0,[0,-1]],[3,[0,0]],[2,[0,0]],[1,[0,0]]],
  apmTrans : [[0,[0,-1]],[1,[0,-1]],[2,[0,0]],[3,[0,0]]]
};
var butCol6e533v;
function fnSetCol6e533v() {fnStoreStack();fnCheckDouble();fnAddCol(col6e533v);stack.nCurMult*=2;fnSButtons();draw();}

var col6v = { 
  nNumPolys : 1,
  sInType : "LR",
  sOutType : "LR",
  nMultiple : 1,
  aa2NewPts : [[1.01, .5],[.722, 0]],
  nNumOldPts : 2,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[2,[0,1]],[1,[0,1]]]
  ],
  apmEdge : [[0,[0,0]],[1,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,1]]]
};
var butCol6v;
function fnSetCol6v() {fnStoreStack();fnAddCol(col6v);fnLRButtons();draw();}

var col6v3e3v = { 
  nNumPolys : 3,
  sInType : "LLR",
  sOutType : "LRR",
  nMultiple : 2,
  aa2NewPts : [[0.854,1.634],[1.22,1],[.854,.366]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[4,[0,0]],[5,[0,0]],[3,[0,1]]],
    [[2,[0,0]],[0,[0,-1]],[4,[0,0]]],
    [[0,[0,-1]],[3,[0,0]],[4,[0,0]]]
  		],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]]]
};
var butCol6v3e3v;
function fnSetCol6v3e3v() {fnStoreStack();fnCheckDouble();fnAddCol(col6v3e3v);fnLRRButtons();draw();}

var col6v4e = { 
  nNumPolys : 2,
  sInType : "LLR",
  sOutType : "LRR",
  nMultiple : 2,
  aa2NewPts : [[0.854,1.634],[1.22,1],[.854,.366]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[4,[0,0]],[5,[0,0]],[3,[0,1]]],
    [[2,[0,0]],[0,[0,-1]],[3,[0,0]],[4,[0,0]]]
  		],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]]]
};
var butCol6v4e;
function fnSetCol6v4e() {fnStoreStack();fnCheckDouble();fnAddCol(col6v4e);fnLRRButtons();draw();}

var col7e7v = { 
  nNumPolys : 2,
  sInType : "LRLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.679,1.445],[.893,1],[.679,.555],[1.065,.247],[1.065,-.247]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[7,[0,0]],[8,[0,0]],[9,[0,0]],[5,[0,1]]],
    [[2,[0,0]],[3,[0,0]],[4,[0,0]],[0,[0,-1]],[5,[0,0]],[6,[0,0]],[7,[0,0]]]
  ],
  apmEdge : [[4,[0,0]],[3,[0,0]],[2,[0,0]],[1,[0,0]],[0,[0,0]]],
  apmTrans : [[0,[0,-1]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],
		[0,[0,-1]],[1,[0,-1]],[2,[0,0]],[3,[0,0]],[4,[0,0]]]
};
var butCol7e7v;
function fnSetCol7e7v() {fnStoreStack();fnCheckDouble();fnAddCol(col7e7v);fnLLRLRButtons();draw();}

var col7v4e = { 
  nNumPolys : 2,
  sInType : "LLR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[.764,1.693],[1.23,1.28],[1.23,.72],[.764,.307]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[5,[0,0]],[6,[0,0]],[4,[0,1]]],
    [[3,[0,0]],[0,[0,-1]],[4,[0,0]],[5,[0,0]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[0,[0,0]],[3,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]]]
};
var butCol7v4e;
function fnSetCol7v4e() {fnStoreStack();fnCheckDouble();fnAddCol(col7v4e);fnLLRRButtons();draw();}

var col74e = { 
  nNumPolys : 2,
  sInType : "LLRR",
  sOutType : "LRR",
  nMultiple : 2,
  aa2NewPts : [[.81,1.644],[1.138,1],[.81,.356]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]],[3,[0,1]]],
    [[2,[0,0]],[0,[0,-1]],[3,[0,0]],[4,[0,0]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]]]
};
var butCol74e;
function fnSetCol74e() {fnStoreStack();fnCheckDouble();fnAddCol(col74e);fnLRRButtons();draw();}

var col76e = { 
  nNumPolys : 2,
  sInType : "LLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.752,.528],[1.228,.284],[1.228,-.284],[.752,-.528],[1.014,-1]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[5,[0,0]],[6,[0,0]]],
    [[3,[0,0]],[4,[0,0]],[0,[0,-1]],[6,[0,-1]],[7,[0,-1]],[8,[0,-1]],[5,[0,0]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[0,[0,0]],[4,[0,1]],[3,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],
		[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,1]]]
};
var butCol76e;
function fnSetCol76e() {fnStoreStack();fnCheckDouble();fnAddCol(col76e);fnLLRLRButtons();draw();}

var col8e = { 
  nNumPolys : 1,
  sInType : "LRR",
  sOutType : "LLR",
  nMultiple : 2,
  aa2NewPts : [[1.805,1.414],[1.805,0.586],[1.219,0]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[3,[0,1]],[2,[0,1]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[0,[0,0]],[1,[0,0]],[1,[0,0]],[2,[0,0]],[2,[0,1]]]
};
var butCol8e;
function fnSetCol8e() {fnStoreStack();fnCheckDouble();fnAddCol(col8e);fnLLRButtons();draw();}

var col8e6v = { 
  nNumPolys : 2,
  sInType : "LRLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[1.008,1.241],[1.008,.759],[.667,.418],[.908,0],[.667,-.418]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[7,[0,0]],[8,[0,0]],[9,[0,0]],[5,[0,1]],[4,[0,1]]],
    [[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]],[7,[0,0]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[4,[0,1]],[3,[0,1]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[4,[0,1]],[3,[0,0]],
		[0,[0,0]],[1,[0,0]],[2,[0,0]],[4,[0,1]],[3,[0,1]]]
};
var butCol8e6v;
function fnSetCol8e6v() {fnStoreStack();fnCheckDouble();fnAddCol(col8e6v);fnLLRLRButtons();draw();}

var col84e = { 
  nNumPolys : 2,
  sInType : "LLRR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[.793,1.707],[1.207,1.293],[1.207,.707],[.793,.293]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[5,[0,0]],[6,[0,0]],[7,[0,0]],[4,[0,1]]],
    [[3,[0,0]],[0,[0,-1]],[4,[0,0]],[5,[0,0]]]
  ],
  apmEdge : [[2,[0,0]],[1,[0,0]],[0,[0,0]],[3,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]]]
};
var butCol84e;
function fnSetCol84e() {fnStoreStack();fnCheckDouble();fnAddCol(col84e);fnLLRRButtons();draw();}

var col85e = { 
  nNumPolys : 2,
  sInType : "LLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[1.104,1.269],[1.104,.731],[.717,.393],[1.026,0],[.717,-.393]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[6,[0,0]],[7,[0,0]],[8,[0,0]],[5,[0,1]],[4,[0,1]]],
    [[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]]]
  ],
  apmEdge : [[1,[0,0]],[0,[0,0]],[4,[0,1]],[3,[0,1]],[2,[0,1]]],
  apmTrans : [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,1]],
		[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,1]],[4,[0,1]]]
};
var butCol85e;
function fnSetCol85e() {fnStoreStack();fnCheckDouble();fnAddCol(col85e);fnLLRLRButtons();draw();}

var col946e = { 
  nNumPolys : 3,
  sInType : "LLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.7,.261],[.7,-.261],[1.161,.516],[1.625,.267],
			[1.625,-.267],[1.161,-.516],[1.342,-1]],
  nNumOldPts : 4,
  aapmPolys : [
    [[1,[0,0]],[5,[0,0]],[6,[0,0]],[2,[0,-1]],[0,[0,-1]],[8,[0,-1]],
		[9,[0,-1]],[10,[0,-1]],[7,[0,0]]],
    [[0,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[1,[0,0]]],
    [[0,[0,0]],[1,[0,0]],[7,[0,0]],[8,[0,0]]]
  ],
  apmEdge : [[4,[0,0]],[3,[0,0]],[2,[0,0]],[6,[0,1]],[5,[0,1]]],
  apmTrans : [[6,[0,0]],[5,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],
		[6,[0,1]],[5,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]]]
};
var butCol946e;
function fnSetCol946e() {fnStoreStack();fnCheckDouble();fnAddCol(col946e);fnLLRLRButtons();draw();}

var col95v5e = { 
  nNumPolys : 3,
  sInType : "LR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.595,2.209],[1.095,2.085],[1.43,1.726],[1.43,1.206],
			[1.095,.847],[1.399,.466],[.595,.723]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[6,[0,0]],
		[9,[0,0]],[10,[0,0]],[7,[0,1]]],
    [[6,[0,0]],[4,[0,0]],[5,[0,0]],[1,[0,-1]],[0,[0,-1]]],
    [[0,[0,-1]],[7,[0,0]],[8,[0,0]],[9,[0,0]],[6,[0,0]]]
  ],
  apmEdge : [[3,[0,0]],[2,[0,0]],[1,[0,0]],[5,[0,1]],[4,[0,1]]],
  apmTrans : [[5,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],
		[5,[0,1]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]]]
};
var butCol95v5e;
function fnSetCol95v5e() {fnStoreStack();fnCheckDouble();fnAddCol(col95v5e);fnLLRLRButtons();draw();}

var col10e5v5e = { 
  nNumPolys : 3,
  sInType : "LRLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.616,1.764],[1.065,1.618],[1.342,1.236],[1.342,0.764],[1.065,0.382],[0.616,0.236],[1.342,0]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[9,[0,0]],
		[10,[0,0]],[11,[0,0]],[7,[0,1]]],
    [[5,[0,0]],[4,[0,0]],[6,[0,0]],[1,[0,-1]],[0,[0,-1]]],
    [[5,[0,0]],[0,[0,-1]],[7,[0,0]],[8,[0,0]],[9,[0,0]]]
  ],
  apmEdge : [[3,[0,0]],[2,[0,0]],[1,[0,0]],[6,[0,1]],[4,[0,1]]],
  apmTrans : [[6,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],
		[6,[0,1]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]]]
};
var butCol10e5v5e;
function fnSetCol10e5v5e() {fnStoreStack();fnCheckDouble();fnAddCol(col10e5v5e);fnLLRLRButtons();draw();}

var col11v3e3v = { 
  nNumPolys : 3,
  sInType : "LLR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[.593,2],[1.186,2],[1.65,1.732],[1.918,1.268],[1.918,.732],[1.65,.268]],
  nNumOldPts : 3,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],
		[1,[0,-1]],[0,[0,-1]],[7,[0,0]],[8,[0,0]],[6,[0,1]]],
    [[5,[0,0]],[2,[0,-1]],[1,[0,-1]]],
    [[0,[0,-1]],[6,[0,0]],[7,[0,0]]]
  ],
  apmEdge : [[4,[0,0]],[3,[0,0]],[2,[0,0]],[5,[0,1]]],
  apmTrans : [[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]]]
};
var butCol11v3e3v;
function fnSetCol11v3e3v() {fnStoreStack();fnCheckDouble();fnAddCol(col11v3e3v);fnLLRRButtons();draw();}

var col123e3v = { 
  nNumPolys : 3,
  sInType : "LLRR",
  sOutType : "LLRR",
  nMultiple : 2,
  aa2NewPts : [[1.134,2],[1.598,1.732],[1.866,1.268],[1.866,.732],[1.598,.268],[.598,0]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[0,[0,-1]],
     [5,[0,0]],[7,[0,0]],[8,[0,0]],[9,[0,0]],[6,[0,1]],[5,[0,1]]],
    [[4,[0,0]],[1,[0,-1]],[0,[0,-1]]],
    [[5,[0,0]],[6,[0,0]],[7,[0,0]]]
  ],
  apmEdge : [[3,[0,0]],[2,[0,0]],[1,[0,0]],[4,[0,1]]],
  apmTrans : [[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]]]
};
var butCol123e3v;
function fnSetCol123e3v() {fnStoreStack();fnCheckDouble();fnAddCol(col123e3v);fnLLRRButtons();draw();}

var col133e3v4e33o = { 
  nNumPolys : 6,
  sInType : "LLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.598,2],[1.094,2],[1.506,1.802],[1.79,1.445],[1.892,1],[1.79,.555],[1.506,.198],[1.962,.198],[1.962,-.198]],
  nNumOldPts : 4,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]],
		[1,[0,-1]],[0,[0,-1]],[10,[0,0]],[11,[0,0]],[12,[0,0]],[9,[0,1]]],
    [[5,[0,0]],[7,[0,0]],[6,[0,0]]],
    [[6,[0,0]],[7,[0,0]],[8,[0,0]],[2,[0,-1]]],
    [[6,[0,0]],[2,[0,-1]],[1,[0,-1]]],
    [[8,[0,0]],[3,[0,-1]],[2,[0,-1]]],
    [[0,[0,-1]],[9,[0,0]],[10,[0,0]]]
  ],
  apmEdge : [[8,[0,0]],[7,[0,0]],[5,[0,0]],[4,[0,0]],[3,[0,0]]],
  apmTrans : [[5,[0,0]],[7,[0,0]],[8,[0,0]],[3,[0,-1]],[4,[0,0]],
		[5,[0,0]],[7,[0,0]],[8,[0,0]],[3,[0,-1]],[4,[0,-1]]]
};
var butCol133e3v4e33o;
function fnSetCol133e3v4e33o() {fnStoreStack();fnCheckDouble();fnAddCol(col133e3v4e33o);fnLLRLRButtons();draw();}

var col14v4e33o3e3v4e33o = { 
  nNumPolys : 9,
  sInType : "LRLRR",
  sOutType : "LLRLR",
  nMultiple : 2,
  aa2NewPts : [[.386,.802],[.797,1],[1.254,1],[1.665,.802],[1.95,.445],[2.051,0],
		[1.95,-.445],[1.665,-.802],[.386,-.802],[2.122,-.802],[2.122,-1.198]],
  nNumOldPts : 5,
  aapmPolys : [
    [[0,[0,0]],[1,[0,0]],[2,[0,0]],[3,[0,0]],[4,[0,0]],[5,[0,0]],[6,[0,0]],[7,[0,0]]
		,[2,[0,-1]],[1,[0,-1]],[8,[0,0]],[11,[0,0]],[12,[0,0]],[13,[0,0]]],
    [[6,[0,0]],[9,[0,0]],[7,[0,0]]],
    [[7,[0,0]],[9,[0,0]],[10,[0,0]],[3,[0,-1]]],
    [[10,[0,0]],[4,[0,-1]],[3,[0,-1]]],
    [[7,[0,0]],[3,[0,-1]],[2,[0,-1]]],
    [[8,[0,0]],[1,[0,-1]],[0,[0,-1]]],
    [[8,[0,0]],[15,[0,-1]],[11,[0,0]]],
    [[8,[0,0]],[0,[0,-1]],[14,[0,-1]],[15,[0,-1]]],
    [[0,[0,-1]],[13,[0,-1]],[14,[0,-1]]]

  ],
  apmEdge : [[10,[0,0]],[9,[0,0]],[6,[0,0]],[5,[0,0]],[4,[0,0]]],
  apmTrans : [[6,[0,0]],[9,[0,0]],[10,[0,0]],[4,[0,-1]],[5,[0,0]],
		[6,[0,0]],[9,[0,0]],[10,[0,0]],[4,[0,-1]],[5,[0,-1]]]
};
var butCol14v4e33o3e3v4e33o;
function fnSetCol14v4e33o3e3v4e33o() {fnStoreStack();fnCheckDouble();fnAddCol(col14v4e33o3e3v4e33o);fnLLRLRButtons();draw();}

function fnHideButtons() {
  butCol3e.hide();
  butCol3e2.hide();
  butCol3e33333o.hide();
  butCol3e33v.hide();
  butCol3e44o2.hide(); 
  butCol3e44o3v.hide();
  butCol3e44o6e533v.hide();
  butCol3v.hide();
  butCol3v2.hide();
  butCol33e3v.hide();
  butCol33o.hide();
  butCol33o2.hide();
  butCol33o33v.hide();
  butCol4e.hide();
  butCol4e2.hide();
  butCol4e3v.hide();
  butCol4e33o.hide();
  butCol4e33o2.hide();
  butCol4v.hide();
  butCol4v2.hide();
  butCol433oA.hide();
  butCol433oB.hide();
  butCol5e.hide();
  butCol5e2.hide();
  butCol5e5v.hide();
  butCol5v.hide();
  butCol5v2.hide();
  butCol5v6o5eA.hide();
  butCol5v6o5eB.hide();
  butCol55o2e.hide();
  butCol57v.hide();
  butCol6e.hide();
  butCol6e2.hide();
  butCol6e533v.hide(); 
  butCol6v.hide();
  butCol6v3e3v.hide();
  butCol6v4e.hide();
  butCol7e7v.hide();
  butCol7v4e.hide();
  butCol74e.hide();
  butCol76e.hide();
  butCol8e.hide();
  butCol8e6v.hide(); 
  butCol84e.hide();
  butCol85e.hide();
  butCol946e.hide(); 
  butCol95v5e.hide(); 
  butCol10e5v5e.hide();
  butCol11v3e3v.hide(); 
  butCol123e3v.hide();
  butCol133e3v4e33o.hide(); 
  butCol14v4e33o3e3v4e33o.hide(); 
}

function fnSButtons() {
  var imgTypeLabel = createImg('S.png');
  imgTypeLabel.position(25,90);	
  fnHideButtons();
  butCol3e.show();
  butCol3e2.show();
  butCol33e3v.show();
  butCol4e.show();
  butCol4e2.show();
  butCol4e3v.show();
  butCol5e.show();
}

function fnLRButtons() {
  imgTypeLabel = createImg('LR.png');
  imgTypeLabel.position(25,90);	
  fnHideButtons();
  butCol3v.show();
  butCol33o.show();
  butCol33o33v.show();
  butCol4v.show();
  butCol433oA.show();
  butCol433oB.show();
  butCol5v.show();
  butCol57v.show();
  butCol6v.show();
  butCol95v5e.show();
}

function fnLLRButtons() {
  imgTypeLabel = createImg('LLR.png');
  imgTypeLabel.position(25,90);	
  fnHideButtons();
  butCol3v2.show();
  butCol33o2.show();
  butCol4v2.show();
  butCol5v2.show();
  butCol6v3e3v.show();
  butCol6v4e.show();
  butCol7v4e.show();
  butCol11v3e3v.show();
}

function fnLRRButtons() {
  imgTypeLabel = createImg('LRR.png');
  imgTypeLabel.position(25,90);	
  fnHideButtons();
  butCol3e33333o.show();
  butCol3e33v.show();
  butCol3e44o3v.show();
  butCol4e33o.show();
  butCol6e.show();
  butCol8e.show();
}

function fnLLRRButtons() {
  imgTypeLabel = createImg('LLRR.png');
  imgTypeLabel.position(25,90);	
  fnHideButtons();
  butCol3e44o2.show();
  butCol3e44o6e533v.show();
  butCol4e33o2.show();
  butCol5e2.show();
  butCol6e2.show();
  butCol74e.show();
  butCol76e.show();
  butCol84e.show();
  butCol85e.show();
  butCol946e.show();
  butCol123e3v.show();
  butCol133e3v4e33o.show();
}

function fnLLRLRButtons() {
  imgTypeLabel = createImg('LLRLR.png');
  imgTypeLabel.position(25,90);	
  fnHideButtons();
  butCol5v6o5eA.show();
  butCol5v6o5eB.show();
  butCol55o2e.show();
}

function fnLRLRRButtons() {
  imgTypeLabel = createImg('LRLRR.png');
  imgTypeLabel.position(25,90);	
  fnHideButtons();
  butCol5e5v.show();
  butCol6e533v.show(); 
  butCol7e7v.show();
  butCol8e6v.show(); 
  butCol10e5v5e.show();
  butCol14v4e33o3e3v4e33o.show();
}

function fnCreateButtons() {

  butBase= createImg('base.png');
  butBase.mousePressed(fnBase);
  butBase.position(10,10);
  butBase.attribute("title", "Base Tiling");

  butStar= createImg('star.png');
  butStar.mousePressed(fnStar);
  butStar.position(50,10);
  butStar.attribute("title", "Star Tiling");

  butRosette= createImg('rosette.png');
  butRosette.mousePressed(fnRosette);
  butRosette.position(90,10);
  butRosette.attribute("title", "Rosette Tiling");

  butUndo= createImg('undo.png');
  butUndo.mousePressed(fnUndo);
  butUndo.position(10, 50);
  butUndo.attribute("title", "Undo");
  
  butRedo= createImg('redo.png');
  butRedo.mousePressed(fnRedo);
  butRedo.position(50, 50);
  butRedo.attribute("title", "Redo");

  butHelp= createImg('help.png');
  butHelp.mousePressed(fnHelp);
  butHelp.position(90, 50);
  butHelp.attribute("title", "Help");

  butStackSvg= createImg('svg.png');
  butStackSvg.mousePressed(fnStackSvg);
  butStackSvg.position(150, 10);
  butStackSvg.attribute("title", "Download SVG file of Stack");

  butStackPng= createImg('png.png');
  butStackPng.mousePressed(fnStackPng);
  butStackPng.position(150, 50);
  butStackPng.attribute("title", "Download PNG file of Stack");

  butRingSvg= createImg('svg.png');
  butRingSvg.mousePressed(fnRingSvg);
  butRingSvg.position(150, 100);
  butRingSvg.attribute("title", "Download SVG file of Rings");

  butRingPng= createImg('png.png');
  butRingPng.mousePressed(fnRingPng);
  butRingPng.position(150,140);
  butRingPng.attribute("title", "Download PNG file of Rings");

  /* label the Button type. */
  imgTypeLabel = createImg('S.png');
  imgTypeLabel.position(10,90);	

  butCol3e= createImg('col3e.png');
  butCol3e.mousePressed(fnSetCol3e);
  butCol3e.attribute("title", "Size 1");

  butCol3e2= createImg('col3e2.png');
  butCol3e2.mousePressed(fnSetCol3e2);
  butCol3e2.attribute("title", "Size 1");

  butCol3e33333o= createImg('col3e33333o.png');
  butCol3e33333o.mousePressed(fnSetCol3e33333o);
  butCol3e33333o.attribute("title", "Size .658");

  butCol3e33v= createImg('col3e33v.png');
  butCol3e33v.mousePressed(fnSetCol3e33v);
  butCol3e33v.attribute("title", "Size 1");

  butCol3e44o2= createImg('col3e44o2.png');
  butCol3e44o2.mousePressed(fnSetCol3e44o2);
  butCol3e44o2.attribute("title", "Size .535");

  butCol3e44o3v= createImg('col3e44o3v.png');
  butCol3e44o3v.mousePressed(fnSetCol3e44o3v);
  butCol3e44o3v.attribute("title", "Size .732");

  butCol3e44o6e533v= createImg('col3e44o6e533v.png');
  butCol3e44o6e533v.mousePressed(fnSetCol3e44o6e533v);
  butCol3e44o6e533v.attribute("title", "Size .5 & Restart");

  butCol3v= createImg('col3v.png');
  butCol3v.mousePressed(fnSetCol3v);
  butCol3v.attribute("title", "Size 1");

  butCol3v2= createImg('col3v2.png');
  butCol3v2.mousePressed(fnSetCol3v2);
  butCol3v2.attribute("title", "Size 1");

  butCol33e3v= createImg('col33e3v.png');
  butCol33e3v.mousePressed(fnSetCol33e3v);
  butCol33e3v.attribute("title", "Size 1");

  butCol33o= createImg('col33o.png');
  butCol33o.mousePressed(fnSetCol33o);
  butCol33o.attribute("title", "Size .577");

  butCol33o2= createImg('col33o2.png');
  butCol33o2.mousePressed(fnSetCol33o2);
  butCol33o2.attribute("title", "Size .732");

  butCol33o33v= createImg('col33o33v.png');
  butCol33o33v.mousePressed(fnSetCol33o33v);
  butCol33o33v.attribute("title", "Size .5 & Restart");

  butCol4e= createImg('col4e.png');
  butCol4e.mousePressed(fnSetCol4e);
  butCol4e.attribute("title", "Size 1");

  butCol4e2= createImg('col4e2.png');
  butCol4e2.mousePressed(fnSetCol4e2);
  butCol4e2.attribute("title", "Size 1");

  butCol4e3v= createImg('col4e3v.png');
  butCol4e3v.mousePressed(fnSetCol4e3v);
  butCol4e3v.attribute("title", "Size .5 & Restart");

  butCol4e33o= createImg('col4e33o.png');
  butCol4e33o.mousePressed(fnSetCol4e33o);
  butCol4e33o.attribute("title", "Size .732");

  butCol4e33o2= createImg('col4e33o2.png');
  butCol4e33o2.mousePressed(fnSetCol4e33o2);
  butCol4e33o2.attribute("title", "Size .535");

  butCol4v= createImg('col4v.png');
  butCol4v.mousePressed(fnSetCol4v);
  butCol4v.attribute("title", "Size .707");

  butCol4v2= createImg('col4v2.png');
  butCol4v2.mousePressed(fnSetCol4v2);
  butCol4v2.attribute("title", "Size .828");

  butCol433oA= createImg('col433oA.png');
  butCol433oA.mousePressed(fnSetCol433oA);
  butCol433oA.attribute("title", "Size .518");

  butCol433oB= createImg('col433oB.png');
  butCol433oB.mousePressed(fnSetCol433oB);
  butCol433oB.attribute("title", "Size .518");

  butCol5e= createImg('col5e.png');
  butCol5e.mousePressed(fnSetCol5e);
  butCol5e.attribute("title", "Size .618");

  butCol5e2= createImg('col5e2.png');
  butCol5e2.mousePressed(fnSetCol5e2);
  butCol5e2.attribute("title", "Size .764");

  butCol5e5v= createImg('col5e5v.png');
  butCol5e5v.mousePressed(fnSetCol5e5v);
  butCol5e5v.attribute("title", "Size .618");

  butCol5v= createImg('col5v.png');
  butCol5v.mousePressed(fnSetCol5v);
  butCol5v.attribute("title", "Size .618 & Restart");

  butCol5v2= createImg('col5v2.png');
  butCol5v2.mousePressed(fnSetCol5v2);
  butCol5v2.attribute("title", "Size .764");

  butCol5v6o5eA= createImg('col5v6o5eA.png');
  butCol5v6o5eA.mousePressed(fnSetCol5v6o5eA);
  butCol5v6o5eA.attribute("title", "Size .460");

  butCol5v6o5eB= createImg('col5v6o5eB.png');
  butCol5v6o5eB.mousePressed(fnSetCol5v6o5eB);
  butCol5v6o5eB.attribute("title", "Size .460");

  butCol55o2e= createImg('col55o2e.png');
  butCol55o2e.mousePressed(fnSetCol55o2e);
  butCol55o2e.attribute("title", "Size .490");

  butCol57v= createImg('col57v.png');
  butCol57v.mousePressed(fnSetCol57v);
  butCol57v.attribute("title", "Size .616");

  butCol6e= createImg('col6e.png');
  butCol6e.mousePressed(fnSetCol6e);
  butCol6e.attribute("title", "Size 1");

  butCol6e2= createImg('col6e2.png');
  butCol6e2.mousePressed(fnSetCol6e2);
  butCol6e2.attribute("title", "Size .667");

  butCol6e533v= createImg('col6e533v.png');
  butCol6e533v.mousePressed(fnSetCol6e533v);
  butCol6e533v.attribute("title", "Size .5 & Restart");

  butCol6v= createImg('col6v.png');
  butCol6v.mousePressed(fnSetCol6v);
  butCol6v.attribute("title", "Size .577");

  butCol6v3e3v= createImg('col6v3e3v.png');
  butCol6v3e3v.mousePressed(fnSetCol6v3e3v);
  butCol6v3e3v.attribute("title", "Size .658");

  butCol6v4e= createImg('col6v4e.png');
  butCol6v4e.mousePressed(fnSetCol6v4e);
  butCol6v4e.attribute("title", "Size .732");

  butCol7e7v= createImg('col7e7v.png');
  butCol7e7v.mousePressed(fnSetCol7e7v);
  butCol7e7v.attribute("title", "Size .494");

  butCol7v4e= createImg('col7v4e.png');
  butCol7v4e.mousePressed(fnSetCol7v4e);
  butCol7v4e.attribute("title", "Size .616");

  butCol74e= createImg('col74e.png');
  butCol74e.mousePressed(fnSetCol74e);
  butCol74e.attribute("title", "Size .714");

  butCol76e= createImg('col76e.png');
  butCol76e.mousePressed(fnSetCol76e);
  butCol76e.attribute("title", "Size .526");

  butCol8e= createImg('col8e.png');
  butCol8e.mousePressed(fnSetCol8e);
  butCol8e.attribute("title", "Size .828");

  butCol8e6v= createImg('col8e6v.png');
  butCol8e6v.mousePressed(fnSetCol8e6v);
  butCol8e6v.attribute("title", "Size .482");

  butCol84e= createImg('col84e.png');
  butCol84e.mousePressed(fnSetCol84e);
  butCol84e.attribute("title", "Size .586");

  butCol85e= createImg('col85e.png');
  butCol85e.mousePressed(fnSetCol85e);
  butCol85e.attribute("title", "Size .496");

  butCol946e= createImg('col946e.png');
  butCol946e.mousePressed(fnSetCol946e);
  butCol946e.attribute("title", "Size .516");

  butCol95v5e= createImg('col95v5e.png');
  butCol95v5e.mousePressed(fnSetCol95v5e);
  butCol95v5e.attribute("title", "Size .482");

  butCol10e5v5e= createImg('col10e5v5e.png');
  butCol10e5v5e.mousePressed(fnSetCol10e5v5e);
  butCol10e5v5e.attribute("title", "Size .472");

  butCol11v3e3v= createImg('col11v3e3v.png');
  butCol11v3e3v.mousePressed(fnSetCol11v3e3v);
  butCol11v3e3v.attribute("title", "Size .543");

  butCol123e3v= createImg('col123e3v.png');
  butCol123e3v.mousePressed(fnSetCol123e3v);
  butCol123e3v.attribute("title", "Size .535");

  butCol133e3v4e33o= createImg('col133e3v4e33o.png');
  butCol133e3v4e33o.mousePressed(fnSetCol133e3v4e33o);
  butCol133e3v4e33o.attribute("title", "Size .428");

  butCol14v4e33o3e3v4e33o= createImg('col14v4e33o3e3v4e33o.png');
  butCol14v4e33o3e3v4e33o.mousePressed(fnSetCol14v4e33o3e3v4e33o);
  butCol14v4e33o3e3v4e33o.attribute("title", "Size .427");

  /* S buttons */
  butCol3e2.position(10,140);
  butCol4e2.position(70,140);
  butCol3e.position(10,200);
  butCol4e.position(70,200);
  butCol5e.position(10,260);
  butCol33e3v.position(70,260);
  butCol4e3v.position(10,320);

  /* LR buttons */
  butCol433oA.position(10,140);
  butCol433oB.position(70,140);
  butCol3v.position(10,200);
  butCol4v.position(70,200);
  butCol6v.position(10,260);
  butCol33o.position(70,260);
  butCol33o33v.position(10,320);
  butCol5v.position(70, 320);
  butCol57v.position(10, 380);
  butCol95v5e.position(70, 380);

  /* LLR buttons */
  butCol3v2.position(10, 140);
  butCol5v2.position(70, 140);
  butCol4v2.position(10, 200);
  butCol6v4e.position(70, 200);
  butCol7v4e.position(10, 260);
  butCol6v3e3v.position(70, 260);
  butCol11v3e3v.position(10, 320);
  butCol33o2.position(70, 320);

  /* LRR buttons */
  butCol6e.position(10, 140);
  butCol4e33o.position(70, 140);
  butCol8e.position(10, 200);
  butCol3e44o3v.position(70, 200);
  butCol3e33v.position(10, 260);
  butCol3e33333o.position(70, 260);

  /* LLRR buttons */
  butCol6e2.position(10,140);
  butCol5e2.position(70, 140);
  butCol74e.position(10, 200);
  butCol84e.position(70,200);
  butCol123e3v.position(10, 260);
  butCol4e33o2.position(70, 260);
  butCol3e44o6e533v.position(10, 320);
  butCol85e.position(70, 320);
  butCol76e.position(10, 380);
  butCol3e44o2.position(70, 380);
  butCol946e.position(130, 380);
  butCol133e3v4e33o.position(130, 320);

  /* LLRLR buttons */
  butCol55o2e.position(10,140);
  butCol5v6o5eA.position(70, 140);
  butCol5v6o5eB.position(10, 200);

  /* LRLRR buttons */
  butCol5e5v.position(10,140);
  butCol7e7v.position(70, 140);
  butCol10e5v5e.position(10, 200);
  butCol6e533v.position(70, 200);
  butCol8e6v.position(10, 260);
  butCol14v4e33o3e3v4e33o.position(70, 260);

  fnHideButtons();
  fnSButtons();

  nNgonSlider = createSlider( 6, 200, 40, 1 );
  nNgonSlider.input( fnNgonChanged );	
  nNgonSlider.position( 260, 100 );

  nZoomSlider = createSlider( 10, 500, 100, 10 );
  nZoomSlider.input( fnZoomChanged );	
  nZoomSlider.position( 480, 100 );
  nZoomSlider.style('width', '80px');

  nAngleSlider = createSlider( 30, 150, 60, 15 );
  nAngleSlider.input( fnAngleChanged );	
  nAngleSlider.position( 700, 100 );
  nAngleSlider.style('width', '80px');
  nAngleSlider.hide();

  imgLogo = createImg('logo.png');
  imgLogo.position(2,440);	
}
