/***************************INITIALIZE LIBRARY***************************/ 

var jsPsych = initJsPsych({
  //extensions: [{ type: jsPsychExtensionCountdown }],  
  on_finish: function () {
    //jsPsych.data.displayData();
    jsPsych.data.get().localSave('csv', 'HEP000BH.csv');
  }
});
/************************************************************************/ 

/*****************************DEFINE TIMELINE****************************/ 
var main_timeline = [];
/************************************************************************/ 

/*****************************PRELOAD MEDIA*****************************/ 

/***items for practice***/
var preload_practice = {
    type: jsPsychPreload,
    images: [
            'practice_img/ck.png',
            'practice_img/eh.png',
            'practice_img/mp.png',
            'practice_img/mq.png',
            'practice_img/nc.png',
            'practice_img/nu.png',
            'practice_img/ps.png',
            'practice_img/tw.png',
            'practice_img/va.png',
            'practice_img/xk.png'
    ]
};
main_timeline.push(preload_practice);

var practice_vars = [
  //STAND ALONE FORMAT 
  {picture: 'practice_img/ck.png', name: 'COOK ISLANDS'}, //COOK ISLANDS 
  {picture: 'practice_img/eh.png', name: 'WESTERN SAHARA'}, //WESTERN SAHARA 
  {picture: 'practice_img/mp.png', name: 'NORTHERN MARIANAS ISLANDS'}, //WESTERN SAHARA 
  {picture: 'practice_img/mq.png', name: 'MARTINIQUE'}, //WESTERN SAHARA 
  {picture: 'practice_img/nc.png', name: 'NEW CALEDONIA'}, //NORTH CALEDONIA 
  {picture: 'practice_img/nu.png', name: 'NIUE'}, //WESTERN SAHARA 
  {picture: 'practice_img/ps.png', name: 'PALESTINE'}, //WESTERN SAHARA 
  {picture: 'practice_img/tw.png', name: 'TAIWAN'}, //WESTERN SAHARA 
  {picture: 'practice_img/va.png', name: 'VATICAN CITY'}, //WESTERN SAHARA 
  {picture: 'practice_img/xk.png', name: 'KOSOVO'}, //WESTERN SAHARA 
];

/***items for task***/
var preload_task = {
  type: jsPsychPreload,
  images: [
    'img/dz.png',
    'img/ar.png', 
    'img/am.png', 
    'img/au.png', 
    'img/at.png', 
    'img/gh.png', 
    'img/bg.png',  
    'img/kh.png',  
    'img/cm.png',  
    'img/td.png', 
    'img/co.png', 
    'img/cr.png', 
    'img/dk.png',  
    'img/bf.png',  
    'img/md.png', 
    'img/ec.png',  
    'img/eg.png',  
    'img/sv.png', 
    'img/fj.png', 
    'img/fi.png',  
    'img/rs.png', 
    'img/ro.png',  
    'img/sr.png',  
    'img/gw.png', 
    'img/hn.png', 
    'img/is.png', 
    'img/id.png', 
    'img/ir.png', 
    'img/iq.png', 
    'img/tj.png',  
    'img/la.png',  
    'img/lv.png',  
    'img/lb.png',  
    'img/mv.png',  
    'img/mr.png',  
    'img/hu.png',  
    'img/mc.png',  
    'img/mm.png', 
    'img/nl.png',  
    'img/nz.png',  
    'img/ni.png',  
    'img/ng.png',  
    'img/no.png', 
    'img/pk.png',  
    'img/bb.png', 
    'img/py.png', 
    'img/pe.png', 
    'img/pl.png',  
    'img/ru.png',  
    'img/mx.png',  
    'img/sn.png',  
    'img/sg.png',  
    'img/sy.png', 
    'img/th.png',  
    'img/tn.png', 
    'img/tr.png', 
    'img/tv.png',  
    'img/ve.png',  
    'img/vn.png',
     'img/ye.png' 
  ]
};
main_timeline.push(preload_task);

var variables = [
  //STAND ALONE FORMAT 
  {picture: 'img/dz.png', name: 'アルジェリア'}, //0 ALGERIA 
  {picture: 'img/ar.png', name: 'アルゼンチン'}, //1 ARGENTINA 
  {picture: 'img/am.png', name: 'アルメニア'}, //2 ARMENIA 
  {picture: 'img/au.png', name: 'オーストラリア'}, //3 AUSTRALIA 
  {picture: 'img/at.png', name: 'オーストリア'}, //4 AUSTRIA 
  {picture: 'img/gh.png', name: 'ガーナ'}, //5 GHANA 
  {picture: 'img/bg.png', name: 'ブルガリア'}, //6 BULGARIA 
  {picture: 'img/kh.png', name: 'カンボジア'}, //7 CAMBODIA 
  {picture: 'img/cm.png', name: 'カメルーン'}, //8 CAMEROON 
  {picture: 'img/td.png', name: 'チャド'}, //9 CHAD 
  {picture: 'img/co.png', name: 'コロンビア'}, //10 COLOMBIA 
  {picture: 'img/cr.png', name: 'コスタリカ'}, //11 COSTA RICA 
  {picture: 'img/dk.png', name: 'デンマーク'}, //12 DENMARK 
  {picture: 'img/bf.png', name: 'ブルキナファソ'}, //13 BURKINA FASO 
  {picture: 'img/md.png', name: 'モルドバ'},//14 MOLDOVA 
  {picture: 'img/ec.png', name: 'エクアドル'}, //15 ECUADOR 
  {picture: 'img/eg.png', name: 'エジプト'}, //16 EGYPT 
  {picture: 'img/sv.png', name: 'エルサルバドル'}, //17 EL SALVADOR
  {picture: 'img/fj.png', name: 'フィジー'},//18 FIJI 
  {picture: 'img/fi.png', name: 'フィンランド'},//19 FINLAND 
  {picture: 'img/rs.png', name: 'セルビア'},//20 SERBIA 
  {picture: 'img/ro.png', name: 'ルーマニア'},//21 ROMANIA 
  {picture: 'img/sr.png', name: 'スリナム'},//22 SURINAME 
  {picture: 'img/gw.png', name: 'ギニアビサウ'},//23 GUINEA-BISSAU
  {picture: 'img/hn.png', name: 'ホンジュラス'},//24 HONDURAS 
  {picture: 'img/is.png', name: 'アイスランド'},//25 ICELAND 
  {picture: 'img/id.png', name: 'インドネシア'},//26 INDONESIA 
  {picture: 'img/ir.png', name: 'イラン'},//27 IRAN 
  {picture: 'img/iq.png', name: 'イラク'},//28 IRAQ 
  {picture: 'img/tj.png', name: 'タジキスタン'},//29 TAJIKISTAN 
  {picture: 'img/la.png', name: 'ラオス'}, //30 LAOS 
  {picture: 'img/lv.png', name: 'ラトビア'},//31 LATVIA 
  {picture: 'img/lb.png', name: 'レバノン'},//32 LEBANON 
  {picture: 'img/mv.png', name: 'モルディブ'},//33 MALDIVES 
  {picture: 'img/mr.png', name: 'モーリタニア'},//34 MAURITANIA 
  {picture: 'img/hu.png', name: 'ハンガリー'},//35 HUNGARY 
  {picture: 'img/mc.png', name: 'モナコ'},//36 MONACO 
  {picture: 'img/mm.png', name: 'ミャンマー'},//37 MYANMAR 
  {picture: 'img/nl.png', name: 'オランダ'},//38 NETHERLANDS 
  {picture: 'img/nz.png', name: 'ニュージーランド'},//39 NEW ZEALAND 
  {picture: 'img/ni.png', name: 'ニカラグア'},//40 NICARAGUA 
  {picture: 'img/ng.png', name: 'ナイジェリア'},//41 NIGERIA 
  {picture: 'img/no.png', name: 'ノルウェー'},//42 NORWAY 
  {picture: 'img/pk.png', name: 'パキスタン'},//43 PAKISTAN 
  {picture: 'img/bb.png', name: 'バルバドス'},//44 BARBADOS 
  {picture: 'img/py.png', name: 'パラグアイ'},//45 PARAGUAY 
  {picture: 'img/pe.png', name: 'ペルー'},//46 PERU 
  {picture: 'img/pl.png', name: 'ポーランド'},//47 POLAND 
  {picture: 'img/ru.png', name: 'ロシア'},//48 RUSSIA 
  {picture: 'img/mx.png', name: 'メキシコ'},//49 MEXICO 
  {picture: 'img/sn.png', name: 'セネガル'},//50 SENEGAL 
  {picture: 'img/sg.png', name: 'シンガポール'},//51 SINGAPORE 
  {picture: 'img/sy.png', name: 'シリア'},//52 SYRIA 
  {picture: 'img/th.png', name: 'タイ'},//53 THAILAND 
  {picture: 'img/tn.png', name: 'チュニジア'},//54 TUNISIA 
  {picture: 'img/tr.png', name: 'トルコ'},//55 TURKEY 
  {picture: 'img/tv.png', name: 'ツバル'}, //56 TUVALU 
  {picture: 'img/ve.png', name: 'ベネズエラ'},//57 VENEZUELA 
  {picture: 'img/vn.png', name: 'ベトナム'},//58 VIETNAM 
  {picture: 'img/ye.png', name: 'イエメン'},//59 YEMEN         
];
/************************************************************************/

/**************************SWITCH TO FULLSCREEN**************************/ 
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
};
main_timeline.push(enter_fullscreen);
/************************************************************************/

/*****************************WELCOME MESSAGE****************************/    
var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="font-size:32px; color:beige">
               <p>ようこそ</p> 
               <p>「START」をクリックすると、実験が始まります。</p>
               </div>
               `,
  choices: ['START'],
  data: {
    task: 'welcome'
  },
};
main_timeline.push(welcome);
/************************************************************************/

/*****************************PART 0: PRACTICE***************************/

// INSTRUCTIONS
var practice_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div style="font-size:32px; color:beige">    
    <p>まず、練習を行います。</p>
    <p>画面に注視点（＋）が表示され、その後に画像が表示されます。</p>
    <p>※注視点が出ている間だけ、まばたきができます※</p>
    <p>次の試行に進むには、「NEXT」をクリックしてください。</p>
    <p>「START」をクリックすると、練習が始まります。</p>
    </div>   
    `,
  choices: ['START'],
  post_trial_gap: 0,
  data: {
    task: 'practice_instructions',
    item_name: jsPsych.timelineVariable('name')
  },
};
main_timeline.push(practice_instructions);

//RANDOMIZE VARIABLES
var practice_variables = jsPsych.randomization.sampleWithoutReplacement(practice_vars); 

//Fixation cross inbetween trials 
var fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div style="font-size:120px; color:beige">+</div>`,
  choices: "NO_KEYS",
  trial_duration: function () {
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

//PRACTICE TRIAL
var practice = {
  timeline: [fixation, practice_pic],
  timeline_variables: practice_variables,
  randomize_order: false //no need to randomize again fetched items
};
main_timeline.push(practice);

//END TRIAL
var practice_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div style="font-size:32px; color:beige">    
    <p>練習はこれで終わりです。</p> 
    <p>「START」をクリックすると、本実験が始まります。</p>
    </div>   
    `,
  choices: ['START'],
  post_trial_gap: 0,

};
main_timeline.push(practice_end);
/************************************************************************/

/******************************PART 1: STUDY*****************************/

// randomize list for studying
var sample_size = 60;  // Use 100 items for the task, 20 for debugging
var study_variables = jsPsych.randomization.sampleWithoutReplacement(variables,sample_size);
console.log(study_variables); //show the item sample in console for debugging
var study_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div style="font-size:24px; color:beige">
    <div style='float: center;'><img src='img/un.png' width="320" height="240"></img>  
    <p>これから勉強セッションが始まります。</p>
    <p>国旗が国名とともに表示されるので、国旗が属する国を知ることができます。</p>
    <p>次の項目に進むには、「NEXT」ボタンをクリックしてください。</p>
    <p>また注視点が表示されているときだけ、まばたきができます。</p>
    </div>
    <p>「START」"ボタンをクリックします。</p>
    <div style="font-size:108px;bottom:0px;position:absolute;right:10px;"><p>.</p></div>
    </div>
    `,
  choices: ['START'],
  post_trial_gap: 250,
  data: {
    task: 'study_inst',
    item_name: jsPsych.timelineVariable('name')
  },
};
main_timeline.push(study_instructions);

// Define study item structure
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
        <div style="font-size:108px;bottom:0px;position:absolute;right:10px;"><p>.</p></div>
        </div>
        `;
  },
  //Set a timer to disable the button for a minimmum time. Initially is 0.5 seconds, it can be modified.
  //This timer is a simplification of the one used for break, removing the clock on screen
  on_load: function () {
    
    //disable button
    var wait_time = 2000; // in milliseconds
    var start_time = performance.now();
    document.querySelector('button').disabled = true;
    var interval = setInterval(function () {
      var time_left = wait_time - (performance.now() - start_time);
      if (time_left <= 0) {
        document.querySelector('button').disabled = false;
        clearInterval(interval);
      }
    }, 250)
  }
};

//define between blocks rest countdown
var inter_block_countdown_rest = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="font-size:32px; color:beige">
    <p>今は少し休んでください。</p>
    <p>準備ができたら、「CONTINUE 」ボタンをクリックしてください。</p>
    <p>実験はまだ続く：  <span id="clock">1:00</span>
    </div>
    `,
  choices: ['CONTINUE'],
  on_load: function(){
    var wait_time = 2*60*1000; // in milliseconds (5 minutes)
    var start_time = performance.now();
    document.querySelector('button').disabled = true;
    var interval = setInterval(function () {
      var time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes * 1000 * 60) / 1000);
      var seconds_str = seconds.toString().padStart(2, '0');
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if (time_left <= 0) {
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
      }
    }, 250)
  }
};

//define between sets rest countdown
var inter_rep_countdown_rest = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="font-size:32px; color:beige">
    <p>今は少し休んでください。</p>
    <p>準備ができたら、「CONTINUE 」ボタンをクリックしてください。</p>
    <p>実験はまだ続く：  <span id="clock">1:00</span>
    </div>
    `,
  choices: ['CONTINUE'],
  on_load: function(){
    var wait_time = 3*60*1000; // in milliseconds
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

// Define block size and repetition parameters
var n_sets = 3;  //number of repetitions for the section. D
var block_size = 15; //number of elements to study in one block. Debug: 5, Real task: 20
var n_blocks = sample_size / block_size;  // The result of this operation must always be an integer
console

// 
var i = 0;
while (i < n_sets) {
  
  //first we define where the block starts and where it ends    
  var first_el = 0;
  var last_el = block_size;

  //shuffle the list
  var random_study = jsPsych.randomization.sampleWithoutReplacement(study_variables, sample_size);

  // iterate across block size
  for (var k = 0; k < n_blocks; k++) {
    //Inside this loop, we go through the whole item list in sets defined by chunk_size variable,
    //Every set will be studied once, when the whole list is done, it will restart 
    set = random_study.slice(first_el, last_el);
    console.log(set);

    var announce = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<div style="font-size:48px; color:beige">
        <p>Set ${i + 1}/${n_sets}.</p>
        <p>Block ${k + 1}/${n_blocks}.</p>
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

   if ((i==n_sets-1) && (k==n_blocks-1))
   {
      main_timeline.push(study_trial);            
   }
   else if (k==n_blocks-1)
   {
      main_timeline.push(study_trial, inter_rep_countdown_rest);  
   }
   else
   { 
      main_timeline.push(study_trial,inter_block_countdown_rest);
   } 
   
   //once the set is displayed for study, the indeces are shifted to continue with the next set
   first_el = first_el+block_size;
   last_el = last_el+block_size;    
  }  

  i++;
 // console.log(i, k);    
}

//rest after section is done 
// Countdown implementation
var countdown_rest = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="font-size:32px; color:beige">
    <p>これで勉強セクションは終わります。</p>    
    <p>今は少し休んでください。</p>
    <p>次に、できるだけ多くの項目を覚えるようにします。</p>
    <p>準備ができたら、「CONTINUE 」ボタンをクリックしてください。</p>
    <p>実験はまだ続く： <span id="clock">1:00</span>
    </div>`,
  choices: ['CONTINUE'],
  on_load: function(){
    var wait_time = 5*60*1000; // in milliseconds (10 minutes)
    var start_time = performance.now();
    document.querySelector('button').disabled = true;
    var interval = setInterval(function () {
      var time_left = wait_time - (performance.now() - start_time);
      var minutes = Math.floor(time_left / 1000 / 60);
      var seconds = Math.floor((time_left - minutes * 1000 * 60) / 1000);
      var seconds_str = seconds.toString().padStart(2, '0');
      document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
      if (time_left <= 0) {
        document.querySelector('#clock').innerHTML = "0:00";
        document.querySelector('button').disabled = false;
        clearInterval(interval);
      }
    }, 250)
  }
};
main_timeline.push(countdown_rest);
/************************************************************************/

/***************************PART 2. TEST*********************************/

// Section instructions
var test_instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div style="font-size:24px; color:beige">
    <div style='float: center;'><img src='img/un.png' width="320" height="240"></img> 
    <p>国旗に関連する国名を正しく覚えているかどうかが問われます。</p>
    <p>それぞれの国旗が1回ずつ表示され、正しい国名を選択してください。</p>   
    <p>「START」をクリックすると開始します。</p>
    <div style="font-size:108px;bottom:0px;position:absolute;right:10px;"><p>.</p></div>
    </div>`,
  choices: ['START'],
  post_trial_gap: 1000,
  data: {
    task: 'test_inst'
  }
};
main_timeline.push(test_instructions);


//Old open survey version
var test_trial = {
  type: jsPsychSurveyText,
  preamble: function () {
    return `<img src='${jsPsych.timelineVariable("picture")}'></img>`
  },
  questions: [
    {prompt: function (){
      return `<div style="font-size:24px; color:beige">
      <p>この旗は何国のですか？</p>
      <div style="font-size:108px;bottom:0px;position:absolute;right:10px;"><p>.</p></div>
      </div>`; 
      }
    }
  ],
  data:{ 
    task: 'test',    
    item_name: jsPsych.timelineVariable('name')   
   },
} 

//RANDOMIZE VARIABLES
var test_variables = jsPsych.randomization.sampleWithoutReplacement(variables); 

var test = {
  //timeline: [fixation, test_trial],
  timeline: [fixation, test_trial],
  timeline_variables: test_variables,
  randomize_order: true
};
main_timeline.push(test);


var finalization = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="font-size:48px; color:beige">
    <p>以上で実験は終わりです。</p>
    <p>ご協力、誠にありがとうございました</p>
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
