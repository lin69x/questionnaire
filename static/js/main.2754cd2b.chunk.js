(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,i){e.exports=i(141)},137:function(e,t,i){},139:function(e,t,i){},141:function(e,t,i){"use strict";i.r(t);var n={};i.r(n),i.d(n,"NEXT_QUESTION",function(){return v}),i.d(n,"PREV_QUESTION",function(){return E});var l={};i.r(l),i.d(l,"nextQuestion",function(){return H}),i.d(l,"prevQuestion",function(){return C});var a=i(3),s=i.n(a),r=i(54),u=i.n(r),c=i(27),d=i(72),o=i(7),m=i(31),p=i.n(m),h=i(88),b=i(16),f=i(36),v="app/NEXT_QUESTION",E="app/PREV_QUESTION",_=p.a.mark(g),N=p.a.mark(y);function g(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.d)(Object(f.a)("questionnaire"));case 3:return e.next=5,Object(b.b)(d.b,500);case 5:return e.next=7,Object(b.d)(Object(f.b)("questionnaire"));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(b.b)(Error,e.t0);case 13:case"end":return e.stop()}},_,this,[[0,9]])}function y(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(n.NEXT_QUESTION,g);case 2:return e.next=4,Object(b.e)(n.PREV_QUESTION,g);case 4:case"end":return e.stop()}},N,this)}var O=[Object(b.c)(y)],q=p.a.mark(j);function j(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(Object(h.a)(O));case 2:case"end":return e.stop()}},q,this)}var J=i(74),x=i(78),w=i(85),S=Object(x.a)({},w.a,{currentQuestionIdx:0}),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,i=t.type;t.payload;switch(i){case n.NEXT_QUESTION:return Object(x.a)({},e,{currentQuestionIdx:e.currentQuestionIdx+1});case n.PREV_QUESTION:return Object(x.a)({},e,{currentQuestionIdx:e.currentQuestionIdx-1});default:return e}},M=Object(d.a)(),Q=[M],D=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d)(o.a.apply(void 0,Q)),P=Object(o.e)(Object(o.c)({form:J.a,app:I}),{},D);M.run(j);var T=P,U=i(32),B=function(e){var t=e.children;return s.a.createElement(U.Grid,{fluid:!0},t)},k=i(81),A=i(70),R=i(89),K=i(71),W={radioLabel:{cursor:"pointer"}},z=(i(137),function(e){var t=e.headline,i=e.question_type,n=e.choices,l=e.identifier,a=e.handleSubmit,r=e.submitting,u=e.actions,c=e.multiline;return s.a.createElement("form",{onSubmit:a},s.a.createElement(k.TransitionGroup,null,s.a.createElement(k.CSSTransition,{key:l,timeout:600,classNames:"fade",mountOnEnter:!0,unmountOnExit:!0},s.a.createElement("div",{className:"question-container"},function(){switch(i){case"multiple-choice":return function(e){var t=e.label,i=e.options,n=e.name;return s.a.createElement("div",null,s.a.createElement("h4",null,t),i.map(function(e,t){return s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("label",{style:W.radioLabel},s.a.createElement(K.a,{name:n,component:"input",type:"radio",value:e.value})," ",e.label),s.a.createElement("br",null))}))}({label:t,name:l,options:n});case"text":return function(e){var t=e.label,i=e.name,n=e.textarea,l=void 0!==n&&n,a=Object(R.a)(e,["label","name","textarea"]);return s.a.createElement("div",null,s.a.createElement("h4",null,t),s.a.createElement(K.a,Object.assign({name:i,component:l?"textarea":"input",type:"text"},a)))}({label:t,name:l,textarea:JSON.parse(c),rows:5,autoFocus:!0});default:return null}}()))),s.a.createElement("div",null,s.a.Children.map(u,function(e){return s.a.cloneElement(e,{disabled:e.props.disabled||r})})))});z.defaultProps={choices:[],actions:[],multiline:!1};var F=Object(A.a)({form:"questionnaire",destroyOnUnmount:!1,forceUnregisterOnUnmount:!1})(z),V=function(e){var t=e.children,i=e.styles;return s.a.createElement("div",{style:i},t)};V.defaultProps={styles:{height:230,background:"#fff",padding:16,borderRadius:2}};var X=V,H=function(e){return{type:n.NEXT_QUESTION,payload:e}},C=function(e){return{type:n.PREV_QUESTION,payload:e}},L=Object(c.b)(function(e){return{app:e.app}},function(e){return Object(o.b)({nextQuestion:l.nextQuestion,prevQuestion:l.prevQuestion},e)})(function(e){var t=e.app,i=t.name,n=t.description,l=t.questions,a=t.currentQuestionIdx,r=e.prevQuestion,u=e.nextQuestion;return s.a.createElement(B,null,s.a.createElement(U.Row,{center:"md"},s.a.createElement("h2",null,i)),s.a.createElement(U.Row,{center:"md"},s.a.createElement("h3",null,n)),s.a.createElement(U.Row,null,s.a.createElement(U.Col,{md:8,mdOffset:2},s.a.createElement(X,null,a>=l.length?s.a.createElement(U.Row,{center:"md"},s.a.createElement("h3",null,"Thank You!")):s.a.createElement(F,Object.assign({},l[a],{actions:[s.a.createElement("button",{type:"button",key:"btn-prev",className:"custom-btn",onClick:r,disabled:0===a},"Previous"),s.a.createElement("button",{type:"submit",key:"btn-next",className:"custom-btn",disabled:a===l.length},a<l.length-1?"Next":"Finish")],onSubmit:u}))))))});i(139);u.a.render(s.a.createElement(c.a,{store:T},s.a.createElement(L,null)),document.getElementById("root"))},85:function(e){e.exports={a:{id:40,identifier:"ewBzTS",name:"Privathaftpflichtversicherung",questions:[{question_type:"multiple-choice",identifier:"list_12110962",headline:"Wen m\xf6chtest Du versichern?",description:null,required:!1,multiple:"false",choices:[{label:"Meine Familie mit Kindern",value:"Meine Familie mit Kindern",selected:!1},{label:"Meine Familie ohne Kinder",value:"Meine Familie ohne Kinder",selected:!1},{label:"Mich ohne Kind",value:"Mich ohne Kind",selected:!1},{label:"Mich mit Kind",value:"Mich mit Kind",selected:!1},{label:"Mich und meinen Lebenspartner",value:"Mich und meinen Lebenspartner",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12111610",headline:"Bist Du Beamter oder im \xf6ffentlichen Dienst angestellt?",description:null,required:!1,multiple:"false",choices:[{label:"Ja",value:"Ja",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12111777",headline:"M\xf6chtest Du eine Forderungsausfalldeckung absichern?",description:null,required:!1,multiple:"false",choices:[{label:"Ja",value:"Ja",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12110966",headline:"Wie wichtig ist Dir die Absicherung gegen Mietsachsch\xe4den?",description:null,required:!1,multiple:"false",choices:[{label:"Wichtig",value:"Wichtig",selected:!1},{label:"Unwichtig",value:"Unwichtig",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12110967",headline:"Bist Du Eigent\xfcmer einer oder mehrerer Immobilien?",description:null,required:!1,multiple:"false",choices:[{label:"Ja",value:"Ja",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[{conditions:[{field:"list_12110967",value:"Ja"}],destination:{id:"list_12110968"}},{conditions:[{field:"list_12110967",value:"Nein"}],destination:{id:"list_12111854"}}]},{question_type:"multiple-choice",identifier:"list_12110968",headline:"Geh\xf6rt Dir eine selbstbewohnte Immobilie?",description:null,required:!1,multiple:"false",choices:[{label:"Ja, im Inland",value:"Ja, im Inland",selected:!1},{label:"Ja, im Ausland",value:"Ja, im Ausland",selected:!1},{label:"Ja, im Inland und Ausland",value:"Ja, im Inland und Ausland",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_13907264",headline:"Hast Du eine oder mehrere vermietete Immobilien?",description:null,required:!1,multiple:"false",choices:[{label:"Ja, im Inland",value:"Ja, im Inland",selected:!1},{label:"Ja, im Ausland",value:"Ja, im Ausland",selected:!1},{label:"Ja, im Inland und Ausland",value:"Ja, im Inland und Ausland",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12111854",headline:"M\xf6chtest Du in n\xe4chster Zeit etwas bauen oder umbauen?",description:null,required:!1,multiple:"false",choices:[{label:"Ja",value:"Ja",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12110972",headline:"Wie wichtig ist Dir die Absicherung gegen beruflichen Schl\xfcsselverlust?",description:null,required:!1,multiple:"false",choices:[{label:"Wichtig",value:"Wichtig",selected:!1},{label:"Unwichtig",value:"Unwichtig",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_13913438",headline:"M\xf6chtest Du den Verlust privater Schl\xfcssel absichern?",description:null,required:!1,multiple:"false",choices:[{label:"Ja",value:"Ja",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12110969",headline:"M\xf6chtest Du im Ausland abgesichert sein?",description:null,required:!1,multiple:"false",choices:[{label:"Ja, bis zu einem Monat",value:"Ja, bis zu einem Monat",selected:!1},{label:"Ja, mehrere Monate",value:"Ja, mehrere Monate",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12110970",headline:"Hast Du ein Segelboot?",description:null,required:!1,multiple:"false",choices:[{label:"Bis 4 m\xb2",value:"Bis 4 m\xb2",selected:!1},{label:"Bis 10 m\xb2",value:"Bis 10 m\xb2",selected:!1},{label:"Bis 15 m\xb2",value:"Bis 15 m\xb2",selected:!1},{label:"Bis 25 m\xb2",value:"Bis 25 m\xb2",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12110971",headline:"Hast Du ein Motorboot?",description:null,required:!1,multiple:"false",choices:[{label:"Bis 5 PS",value:"Bis 5 PS",selected:!1},{label:"Bis 10 PS",value:"Bis 10 PS",selected:!1},{label:"Bis 15 PS",value:"Bis 15 PS",selected:!1},{label:"Unbegrenzte PS",value:"Unbegrenzte PS",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12110965",headline:"M\xf6chtest Du bei einem Schadensfall einen Teil selbst bezahlen?",description:null,required:!1,multiple:"false",choices:[{label:"Nein",value:"Nein",selected:!1},{label:"Ja, bis 150 Euro",value:"Ja, bis 150 Euro",selected:!1}],jumps:[]},{question_type:"multiple-choice",identifier:"list_12111717",headline:"Hast Du aktuell schon eine Privathaftpflichtversicherung?",description:null,required:!1,multiple:"false",choices:[{label:"Ja",value:"Ja",selected:!1},{label:"Nein",value:"Nein",selected:!1}],jumps:[{conditions:[{field:"list_12111717",value:"Ja"}],destination:{id:"list_12111755"}},{conditions:[{field:"list_12111717",value:"Nein"}],destination:{id:"date_22039590"}}]},{question_type:"multiple-choice",identifier:"list_12111755",headline:"Wie viele Haftpflichtsch\xe4den hattest Du in den letzten 5 Jahren?",description:null,required:!1,multiple:"false",choices:[{label:"Keine",value:"Keine",selected:!1},{label:"1",value:"1",selected:!1},{label:"2",value:"2",selected:!1},{label:"3",value:"3",selected:!1},{label:"Mehr als 3",value:"Mehr als 3",selected:!1}],jumps:[]},{question_type:"text",identifier:"date_22039590",headline:"Was w\xe4re Dein Wunschtermin f\xfcr den Beginn der Privathaftpflichtversicherung?",description:null,required:!1,multiline:"false",jumps:[]},{question_type:"text",identifier:"textarea_12110979",headline:"Hast Du noch weitere Informationen oder Anmerkungen f\xfcr uns?",description:null,required:!1,multiline:"true",jumps:[]}],description:"Um Dein pers\xf6nliches Privathaftpflichtversicherungs-Angebot zu erstellen, ben\xf6tigen wir noch ein paar Informationen von Dir.",category_name_hyphenated:"Pri&shy;vat&shy;haft&shy;pflicht"}}}},[[115,2,1]]]);
//# sourceMappingURL=main.2754cd2b.chunk.js.map