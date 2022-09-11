"use strict";(self.webpackChunktic_tac=self.webpackChunktic_tac||[]).push([[760],{9760:(P,l,r)=>{r.r(l),r.d(l,{GameModule:()=>M});var c=r(9808),g=r(2747),t=r(4893),m=r(4004),u=r(9300),d=r(8505),f=r(9275),h=r(2340);const p=(n,o)=>[...Array(n).fill(o)];var C=r(520);let T=(()=>{class n{constructor(){this.onClick=new t.vpe}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tile"]],inputs:{value:"value"},outputs:{onClick:"onClick"},decls:2,vars:1,consts:[[1,"tile",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return i.onClick.emit()}),t._uU(1),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",i.value,"\n"))},styles:[".tile[_ngcontent-%COMP%]{background-color:#6b4f4f;color:#fff3e4;border:none;width:9rem;height:9rem;padding:0;font-size:3rem;border-radius:.5rem;text-align:center;display:flex;justify-content:center;align-items:center;transition:all .3s ease-out;-webkit-user-select:none;user-select:none}"],changeDetection:0}),n})();function b(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"app-tile",3),t.NdJ("onClick",function(){const w=t.CHM(e).index;return t.oxw().onTileClick(w)}),t.qZA()()}if(2&n){const e=o.$implicit;t.xp6(1),t.Q6J("value",e)}}function y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"p",5),t._uU(2),t.qZA(),t.TgZ(3,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw().restartGame()}),t._uU(4,"New Game?"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.message)}}function x(n,o){if(1&n&&t._UZ(0,"img",8),2&n){const e=t.oxw(2);t.Q6J("src",e.randomGIF,t.LSH)}}function Z(n,o){if(1&n&&(t.TgZ(0,"div",4),t.YNc(1,x,1,1,"img",7),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.randomGIF)}}const a_X="X",a_O="O";let k=(()=>{class n{constructor(e){this.http=e,this.board=p(9,null),this.currentPlayer=a_X}onTileClick(e){if(this.board[e]||this.message||this.isThinking||this.currentPlayer!==a_X)return;this.board[e]=a_X,this.currentPlayer=a_O;const i=(n=>{const o=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[e,i,s]of o)if(n[e]&&n[e]===n[i]&&n[e]===n[s])return n[e]===a_X?"You":"Computer";return null})(this.board);i?this.message=`${i} won!`:this.board.every(s=>!!s)?this.message="Draw!":this.computerTurn().subscribe()}restartGame(){this.board=p(9,null),this.currentPlayer=a_X,this.message=""}computerTurn(){return this.http.get(h.N.gifUrl).pipe((0,m.U)(e=>{var i;return null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.id}),(0,u.h)(e=>!!e),(0,m.U)(e=>`https://i.giphy.com/media/${e}/giphy.webp`),(0,d.b)(e=>{this.randomGIF=e,this.isThinking=!0}),(0,f.g)(2e3),(0,d.b)(()=>{this.isThinking=!1,this.board[(n=>{const o=this.board.map((e,i)=>({tile:e,index:i})).filter(({tile:e})=>!e);return o[Math.floor(Math.random()*o.length)].index})()]=a_O,this.currentPlayer=a_X}))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-board"]],decls:4,vars:3,consts:[[1,"board"],[4,"ngFor","ngForOf"],["class","board__over",4,"ngIf"],[3,"value","onClick"],[1,"board__over"],[1,"board__message"],[1,"board__button",3,"click"],["alt","random thinking gif","class","board__gif",3,"src",4,"ngIf"],["alt","random thinking gif",1,"board__gif",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,b,2,1,"div",1),t.YNc(2,y,5,1,"div",2),t.YNc(3,Z,2,1,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.board),t.xp6(1),t.Q6J("ngIf",i.message),t.xp6(1),t.Q6J("ngIf",i.isThinking))},directives:[c.sg,T,c.O5],styles:[".board[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1rem;gap:1rem}.board__over[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#483434b3}.board__message[_ngcontent-%COMP%]{font-size:4rem;font-weight:300;color:#fff3e4;text-align:center}.board__button[_ngcontent-%COMP%]{border-radius:.3rem;border:none;padding:.5rem 1rem;background-color:#eed6c4;color:#483434;font-size:3rem}.board__gif[_ngcontent-%COMP%]{border-radius:.5rem;height:50%;width:auto;opacity:.6}"]}),n})();const O=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:7,vars:0,consts:[[1,"game"],[1,"game__title"],[1,"game__description"],[1,"game__content"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2," Tic Tac Toe "),t.qZA(),t.TgZ(3,"p",2),t._uU(4," Play against the dumbest AI ever! "),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"app-board"),t.qZA()())},directives:[k],styles:[".game__title[_ngcontent-%COMP%]{font-size:5rem;font-weight:400;word-spacing:0;letter-spacing:0;text-align:center;margin-bottom:.5rem}.game__description[_ngcontent-%COMP%]{font-size:2rem;font-weight:300;text-align:center}.game__content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:4rem}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,g.Bz.forChild(O)]]}),n})()}}]);