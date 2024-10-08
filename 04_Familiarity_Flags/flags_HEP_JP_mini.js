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

var practice_variables = jsPsych.randomization.sampleWithoutReplacement(variables,5); 

 //Fixation cross inbetween trials 
 var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:120px; color:beige">+</div>`,
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
var sample_size = 20;  // I might be putting this one above
var study_variables = jsPsych.randomization.sampleWithoutReplacement(variables,sample_size);
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


var study_item = {
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
        </div>
        `; 
    },
    //Set a timer to disable the button for a minimmum time. Initially is 0.5 seconds, it can be modified.
    //This timer is a simplification of the one used for break, removing the clock on screen
    on_load: function(){
      var wait_time = 500; // in milliseconds
      var start_time = performance.now();
      document.querySelector('button').disabled = true;
      var interval = setInterval(function(){
        var time_left = wait_time - (performance.now() - start_time);
        if(time_left <= 0){
          document.querySelector('button').disabled = false;
          clearInterval(interval);
        }
      }, 250)
    }
};

var inter_block_countdown_rest = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="font-size:32px; color:beige">
    <p>You can take a short break now.</p>
    <p>When you are ready, click on "CONTINUE"</p>
    <p>The next part of the experiment will start in <span id="clock">1:00</span>
    </div>
    `,
  choices: ['CONTINUE'],
  on_load: function(){
    var wait_time = 10 * 1000; // in milliseconds
    var start_time = performance.now();
    document.querySelector('button').disabled = true;
    var interval = setInterval(function(){
      var time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes*1000*60)/1000);
      var seconds_str = seconds.toString().padStart(2,'0');
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if(time_left <= 0){
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
      }
    }, 250)
  }
};


var n_sets = 2;  //number of repetitions for the section. D
var block_size = 5; //number of elements to study in one block. Debug: 5, Real task: 20
var n_blocks = sample_size/block_size;  // The result of this operation must always be an integer
console

var i = 0;
while (i < n_sets)
{
  //first we define where the block starts and where it ends    
  var first_el = 0;
  var last_el = block_size-1;

  //shuffle the list
  var random_study = jsPsych.randomization.sampleWithoutReplacement(study_variables,sample_size); 
  
  for (var k=0; k<n_blocks; k++) 
  {    
    //Inside this loop, we go through the whole item list in sets defined by chunk_size variable,
    //Every set will be studied once, when the whole list is done, it will restart 
    set = random_study.slice(first_el, last_el);
    console.log(set);  

    var announce = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<div style="font-size:48px; color:beige">
        <p>Set ${i+1}/${n_sets}.</p>
        <p>Block ${k+1}/${n_blocks}.</p>
        </div>
        `,        
        response_ends_trial: false,
        choices: 'NO_KEYS',
        trial_duration: 1000,
        data: {
            task: 'announcement'
        }  
    };
    main_timeline.push(announce);

    var study_trial = {
      timeline: [fixation, study_item],
      timeline_variables: set,     
     };

   // main_timeline.push(study_trial, inter_block_countdown_rest); 

   // There is a bug related to this condition, still working on fixing it
   if ((i<=n_sets-1) && (k<=n_blocks-1))
   {
      main_timeline.push(study_trial, inter_block_countdown_rest);            
   }
   //else if ((i=n_sets) && (k=n_blocks))
   else if (i==n_sets-1)
   {
     main_timeline.push(study_trial);
   } 
   
   //once the set is displayed for study, the indeces are shifted to continue with the next set
   first_el = first_el+block_size;
   last_el = last_el+block_size; 
   
  }  

  i++;
  console.log(i, k);    
}


 //rest after section is done 
 // Countdown implementation
 var countdown_rest = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="font-size:32px; color:beige">
    <p>You can take a short break now.</p>
    <p>When you are ready, click on "CONTINUE"</p>
    <p>The next part of the experiment will start in <span id="clock">1:00</span>
    </div>`,
  choices: ['CONTINUE'],
  on_load: function(){
    var wait_time = 2 * 60 * 1000; // in milliseconds
    var start_time = performance.now();
    document.querySelector('button').disabled = true;
    var interval = setInterval(function(){
      var time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes*1000*60)/1000);
      var seconds_str = seconds.toString().padStart(2,'0');
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if(time_left <= 0){
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
      }
    }, 250)
  }
};
main_timeline.push(countdown_rest);

//Old static implementation 
/*
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
*/

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
    </div>`,
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
      <p>この旗は何国のですか？</p>
      <div style="font-size:108px;top:225px;position:absolute;right:10px;"><p>.</p></div>
      </div>`; 
      }
    }
  ],
  data:{ 
    task: 'test',    
    item_name: jsPsych.timelineVariable('name')   
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
