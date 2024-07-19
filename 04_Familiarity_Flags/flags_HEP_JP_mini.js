var jsPsych = initJsPsych({
  //extensions: [{ type: jsPsychExtensionCountdown }],  
  on_finish: function() {
        //jsPsych.data.displayData();
        jsPsych.data.get().localSave('csv','AMT000BH.csv');
    }
});

//declare main timeline
var main_timeline = [];

//Preload Media
var preload = {
    type: jsPsychPreload,
    images: [
            'img/kp.png',
            'img/lr.png',
            'img/pa.png',
            'img/gm.png',
            'img/ke.png',
            'img/bt.png',
            'img/by.png',
            'img/tm.png',
            'img/ee.png',
            'img/cl.png',
            'img/il.png',
            'img/in.png',
            'img/es.png',
            'img/jm.png',
            'img/at.png',
            'img/ro.png',
            'img/lt.png',
            'img/ls.png',
            'img/bh.png',
            'img/sn.png'
    ]
};
main_timeline.push(preload);

//timeline variables
var variables = [
    //STAND ALONE FORMAT 
    {picture: 'img/kp.png', name: '北朝鮮'}, //NORTH KOREA
    {picture: 'img/lr.png', name: 'リベリア'}, //LIBERIA
    {picture: 'img/pa.png', name: 'パナマ'}, //PANAMA
    {picture: 'img/gm.png', name: 'ガンビア'}, //GAMBIA
    {picture: 'img/ke.png', name: 'ケニア'}, //KENYA
    {picture: 'img/bt.png', name: 'ブータン'}, //BHUTAN
    {picture: 'img/by.png', name: 'ベラルーシ'}, //BELARUS
    {picture: 'img/tm.png', name: 'トルクメニスタン'}, //TURKMENISTAN
    {picture: 'img/ee.png', name: 'エストニア'}, //ESTONIA
    {picture: 'img/cl.png', name: 'チリ'}, //CHILE
    {picture: 'img/il.png', name: 'イスラエル'}, //ISRAEL
    {picture: 'img/in.png', name: 'インド'}, //INDIA
    {picture: 'img/es.png', name: 'スペイン'}, //SPAIN
    {picture: 'img/jm.png', name: 'ジャマイカ'}, //JAMAICA
    {picture: 'img/at.png', name: 'オーストリア'}, //AUSTRIA
    {picture: 'img/ro.png', name: 'ルーマニア'}, //ROMANIA
    {picture: 'img/lt.png', name: 'リトアニア'}, //LITHUANIA
    {picture: 'img/ls.png', name: 'レソト'}, //LESOTHO
    {picture: 'img/bh.png', name: 'バーレーン'}, //BAHRAIN
    {picture: 'img/sn.png', name: 'セネガル'}, //SENEGAL    
];  

//Switch on fullscreen
var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
};
main_timeline.push(enter_fullscreen);

//The first trial will be a simple welcome message using the html-kbeyboard-response plugin.   
var welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div style="font-size:32px; color:beige">
               <p>Welcome to the experiment.</p> 
               <p>「START」をクリックすると、実験を開始します。</p>
               </div>
               `,
               choices: ['START'],
    data:{ 
        task: 'welcome'   
     },           
};
main_timeline.push(welcome); 

// PART 0: Practice.
var practice_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:32px; color:beige">    
    <p>実験に入る前に、練習を行います。</p>
    <p>画面にフィクセーションクロスが表示され、その後に絵が表示されます。次の項目に切り替えるには、「NEXT」ボタンをクリックします。</p>
    <p>フィクセーションクロスが表示されているときだけ、目を瞬かせることができます。</p>     
    <p>「START」をクリックすると、実験を開始します。</p>
    </div>   
    `,
    choices: ['START'],
    post_trial_gap: 0,
    data:{ 
        task: 'practice_instructions',
        item_name: jsPsych.timelineVariable('name')     
    },
};
main_timeline.push(practice_instructions);

var practice_variables = jsPsych.randomization.sampleWithoutReplacement(variables,5); //original val = 10

 //Fixation cross inbetween trials 
 var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:120px; color:beige">+</div>
              `,
    choices: "NO_KEYS",
    trial_duration: function(){
       return jsPsych.randomization.sampleWithoutReplacement([800, 900, 1000, 1200, 1300], 1)[0];
       //return 500; //value for debugging
      }, 
    data: {
	    task: 'fixation'
	  }
};

//DONT FORGET THIS TO PLACE THE CUSTOMIZABLE PROMPT: USE FUNCTIONS
var practice_pic = {
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    /*prompt:function (){
           return `<div style="font-size:36px; color:beige">
           <p>${jsPsych.timelineVariable ("name")}</p>
           </div>`;
    }, */
    choices: ['NEXT']
};

var practice = {
    timeline: [fixation, practice_pic],
    timeline_variables: practice_variables,
    randomize_order: false //no need to randomize again fetched items
 };
 main_timeline.push(practice);

 var practice_end = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:32px; color:beige">    
    <p>練習は終わりです。</p> 
    <p>「START」をクリックすると、実験を開始します。</p>
    </div>   
    `,
    choices: ['START'],
    post_trial_gap: 0,

};
main_timeline.push(practice_end);


// randomize list for studying
var study_variables = jsPsych.randomization.sampleWithoutReplacement(variables,20);
console.log(study_variables); //show the item sample in console for debugging

// PART 1: Study.
var study_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px; color:beige">
    <div style='float: center;'><img src='img/un.png' width="320" height="240"></img>  
    <p>その後、その項目について勉強会を行うそれぞれの国旗が国名とともに表示されます。</p>
    <p>次の項目に進むには、「NEXT」ボタンをクリックします。</p>
    <p>表示している写真がどこの国の国旗がわかる場合は「YES」を、わからない場合は「NO」をクリックしてください。</p>     
    </div>
    <p>「START」"ボタンをクリックします。</p>
    <div style="font-size:108px;top:225px;position:absolute;right:10px;"><p>.</p></div>
    </div>
    `,
    choices: ['START'],
    post_trial_gap: 250,
    data:{ 
        task: 'study_inst',
        item_name: jsPsych.timelineVariable('name')     
    },
};
main_timeline.push(study_instructions);


var study_pic = {
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    choices: ['NEXT'],
    data:{ 
        task: 'study_pic',
        item_name: jsPsych.timelineVariable('name')     
    },
    prompt:function (){
        return `<div style="font-size:36px; color:beige">
        <p>${jsPsych.timelineVariable ("name")}</p>
        <div style="font-size:108px;top:225px;position:absolute;right:10px;"><p>.</p></div>
        </div>`; 
    },
};

var study_section = {
    timeline: [fixation, study_pic],
    timeline_variables: study_variables,
    randomize_order: false //no need to randomize again fetched items
 };
 main_timeline.push(study_section);

  /*
  let timer = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Hello world",
    extensions: [
      {
        type: jsPsychExtensionCountdown,
        params: {
          time: 5000,
          update_time: 20,
          format: (time) => {
            if (time < 3000) {
              document.querySelector(".jspsych-extension-countdown").style.color = "red";
            }
  
            let time_in_seconds = time / 1000;
  
            let minutes = Math.floor(time_in_seconds / 60);
            time_in_seconds -= minutes * 60;
  
            let seconds = Math.floor(time_in_seconds);
  
            let format_number = (number) => {
              let temp_str = `0${number}`;
              return temp_str.substring(temp_str.length - 2);
            };
  
            return `${format_number(minutes)}:${format_number(seconds)}`;
          },
        },
      },
    ],
    on_load: function () {
      setTimeout(() => {
        jsPsych.extensions.countdown.pause();
        setTimeout(() => {
          jsPsych.extensions.countdown.resume();
        }, 2000);
      }, 1000);
    },
  };
  main_timeline.push(timer);*/


 
 //rest after section is done 
var rest = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div style="font-size:32px; color:beige">
    <p>今から少し休憩に取ってください。</p>
    <p>準備が整いましたら、「CONTINUE」をクリックしてください。</p>
    </div>`,
    choices: ['CONTINUE'],
    response_ends_trial: true,
    data: {
	    task: 'rest'
    }	  
};
main_timeline.push(rest);


//PART 2. TEST
var test_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px; color:beige">
    <div style='float: center;'><img src='img/un.png' width="320" height="240"></img> 
    <p>国旗に関連する国名を正しく覚えているかどうかが問われます。</p>
    <p>それぞれの国旗が1回ずつ表示され、正しい国名を覚えていれば「YES」、覚えていなければ「NO」をクリックすることになります。</p>
    <p>「はい」と答えた場合、国名に自信があるかどうかを尋ねられます。絶対に覚えている自信がある場合は「COMPLETELY」、自信がない場合は「JUST GUESSING」をクリックしてください。</p>    
    <p>「START」をクリックすると開始します。</p>
    <div style="font-size:108px;top:325px;position:absolute;right:10px;"><p>.</p></div>
    </div>
    `,
    choices: ['START'],
    post_trial_gap: 1000,
    data: {
        task: 'test_inst'
    }
};
main_timeline.push(test_instructions);


var test_trial = {
  type: jsPsychSurveyText,
  preamble:function (){
    return `<img src='${jsPsych.timelineVariable ("picture")}'></img>`
  },
  questions: [
    {prompt: function (){
      return `<div style="font-size:24px; color:beige">
      <p>What is the name of this country?</p>
      <div style="font-size:108px;top:225px;position:absolute;right:10px;"><p>.</p></div>
      </div>`; 
      }
    }
  ],
  data:{ 
    task: 'test',    
    item_name: jsPsych.timelineVariable('name'),    
    response: jsPsych.surveyt 
   },
} 

var test = {
  timeline: [fixation, test_trial],
  timeline_variables: study_variables,
  randomize_order: true 
};
main_timeline.push(test);


var finalization = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="font-size:48px; color:beige">
    <p>これで実験は終わりです。</p>
    <p>ご参加いただいた皆様、誠にありがとうございました</p>
    </div>`,
    post_trial_gap: 500
};
main_timeline.push(finalization);

//Switch off fullscreen before closing the app
var exit_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: false,
    delay_after: 0
};
main_timeline.push(exit_fullscreen);

//jsPsych.run([gb].concat(trials));
jsPsych.run(main_timeline);
