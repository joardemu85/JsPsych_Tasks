var jsPsych = initJsPsych({
  //extensions: [{ type: jsPsychExtensionCountdown }],  
  on_finish: function () {
    //jsPsych.data.displayData();
    jsPsych.data.get().localSave('csv', 'HEP000BH.csv');
  }
});

//declare main timeline
var main_timeline = [];

//Preload Media

//items for practice
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

//Items for task
var preload_task = {
  type: jsPsychPreload,
  images: [
      'img/dz.png', //ALGERIA 
      'img/ar.png',  //ARGENTINA 
      'img/am.png', //ARMENIA 
      'img/au.png', //AUSTRALIA 
      'img/at.png', //AUSTRIA 
      'img/bj.png', //BENIN 
      'img/bg.png', //BULGARIA 
      'img/kh.png', //CAMBODIA 
      'img/cm.png', //CAMEROON 
      'img/cv.png', //CAPE VERDE  
      'img/co.png', //COLOMBIA 
      'img/cr.png', //COSTA RICA 
      'img/dk.png', //DENMARK 
      'img/dj.png', //DJIBOUTI
      'img/do.png', //DOMINICAN REPUBLIC
      'img/ec.png', //ECUADOR 
      'img/eg.png', //EGYPT 
      'img/sv.png', //EL SALVADOR
      'img/fj.png', //FIJI 
      'img/fi.png', //FINLAND 
      'img/fr.png', //FRANCE 
      'img/ge.png', //GEORGIA 
      'img/gh.png', //GHANA 
      'img/gn.png', //GUINEA 
      'img/hn.png', //HONDURAS 
      'img/is.png', //ICELAND 
      'img/id.png', //INDONESIA 
      'img/ir.png', //IRAN 
      'img/iq.png', //IRAQ 
      'img/it.png', //ITALY 
      'img/la.png', //LAOS 
      'img/lv.png', //LATVIA 
      'img/lb.png', //LEBANON 
      'img/mv.png', //MALDIVES 
      'img/mr.png', //MAURITANIA 
      'img/mx.png', //MEXICO 
      'img/mc.png', //MONACO 
      'img/ma.png', //MOROCCO 
      'img/nl.png', //NETHERLANDS 
      'img/nz.png', //NEW ZEALAND 
      'img/ni.png', //NICARAGUA 
      'img/ng.png', //NIGERIA 
      'img/no.png', //NORWAY 
      'img/pk.png', //PAKISTAN 
      'img/pa.png', //PANAMA 
      'img/py.png', //PARAGUAY 
      'img/pe.png', //PERU 
      'img/pl.png', //POLAND 
      'img/ru.png', //RUSSIA 
      'img/sa.png', //SAUDI ARABIA 
      'img/sn.png', //SENEGAL 
      'img/sg.png', //SINGAPORE 
      'img/sy.png', //SYRIA 
      'img/th.png', //THAILAND 
      'img/tn.png', //TUNISIA 
      'img/tr.png', //TURKEY 
      'img/tv.png', //TUVALU 
      'img/ve.png', //VENEZUELA 
      'img/vn.png', //VIETNAM 
      'img/ye.png' //YEMEN 
      ]
};

main_timeline.push(preload_task);

//timeline variables

//Full version
var variables = [
  //STAND ALONE FORMAT 
    {picture: 'img/dz.png', name: 'アルジェリア'}, //ALGERIA 
    {picture: 'img/ar.png', name: 'アルゼンチン'}, //ARGENTINA 
    {picture: 'img/am.png', name: 'アルメニア'}, //ARMENIA 
    {picture: 'img/au.png', name: 'オーストラリア'}, //AUSTRALIA 
    {picture: 'img/at.png', name: 'オーストリア'}, //AUSTRIA 
    {picture: 'img/bj.png', name: 'ベナン'}, //BENIN 
    {picture: 'img/bg.png', name: 'ブルガリア'}, //BULGARIA 
    {picture: 'img/kh.png', name: 'カンボジア'}, //CAMBODIA 
    {picture: 'img/cm.png', name: 'カメルーン'}, //CAMEROON 
    {picture: 'img/cv.png', name: 'カーボベルデ'}, //CAPE VERDE  
    {picture: 'img/co.png', name: 'コロンビア'}, //COLOMBIA 
    {picture: 'img/cr.png', name: 'コスタリカ'}, //COSTA RICA 
    {picture: 'img/dk.png', name: 'デンマーク'}, //DENMARK 
    {picture: 'img/dj.png', name: 'ジブチ'}, //DJIBOUTI
    {picture: 'img/do.png', name: 'ドミニカ共和国'}, //DOMINICAN REPUBLIC
    {picture: 'img/ec.png', name: 'エクアドル'}, //ECUADOR 
    {picture: 'img/eg.png', name: 'エジプト'}, //EGYPT 
    {picture: 'img/sv.png', name: 'エルサルバドル'}, //EL SALVADOR
    {picture: 'img/fj.png', name: 'フィジー'},//FIJI 
    {picture: 'img/fi.png', name: 'フィンランド'},//FINLAND 
    {picture: 'img/fr.png', name: 'フランス'},//FRANCE 
    {picture: 'img/ge.png', name: 'ジョージア'},//GEORGIA 
    {picture: 'img/gh.png', name: 'ガーナ'}, //GHANA 
    {picture: 'img/gn.png', name: 'ギニア'},//GUINEA 
    {picture: 'img/hn.png', name: 'ホンジュラス'},//HONDURAS 
    {picture: 'img/is.png', name: 'アイスランド'},//ICELAND 
    {picture: 'img/id.png', name: 'インドネシア'},//INDONESIA 
    {picture: 'img/ir.png', name: 'イラン'},//IRAN 
    {picture: 'img/iq.png', name: 'イラク'},//IRAQ 
    {picture: 'img/it.png', name: 'イタリア'},//ITALY 
    {picture: 'img/la.png', name: 'ラオス'}, //LAOS 
    {picture: 'img/lv.png', name: 'ラトビア'},//LATVIA 
    {picture: 'img/lb.png', name: 'レバノン'},//LEBANON 
    {picture: 'img/mv.png', name: 'モルディブ'},//MALDIVES 
    {picture: 'img/mr.png', name: 'モーリタニア'},//MAURITANIA 
    {picture: 'img/mx.png', name: 'メキシコ'},//MEXICO 
    {picture: 'img/mc.png', name: 'モナコ'},//MONACO 
    {picture: 'img/ma.png', name: 'モロッコ'},//MOROCCO 
    {picture: 'img/nl.png', name: 'オランダ'},//NETHERLANDS 
    {picture: 'img/nz.png', name: 'ニュージーランド'},//NEW ZEALAND 
    {picture: 'img/ni.png', name: 'ニカラグア'},//NICARAGUA 
    {picture: 'img/ng.png', name: 'ナイジェリア'},//NIGERIA 
    {picture: 'img/no.png', name: 'ノルウェー'},//NORWAY 
    {picture: 'img/pk.png', name: 'パキスタン'},//PAKISTAN 
    {picture: 'img/pa.png', name: 'パナマ'}, //PANAMA 
    {picture: 'img/py.png', name: 'パラグアイ'},//PARAGUAY 
    {picture: 'img/pe.png', name: 'ペルー'},//PERU 
    {picture: 'img/pl.png', name: 'ポーランド'},//POLAND 
    {picture: 'img/ru.png', name: 'ロシア'},//RUSSIA 
    {picture: 'img/sa.png', name: 'サウジアラビア'},//SAUDI ARABIA 
    {picture: 'img/sn.png', name: 'セネガル'},//SENEGAL 
    {picture: 'img/sg.png', name: 'シンガポール'},//SINGAPORE 
    {picture: 'img/sy.png', name: 'シリア'},//SYRIA 
    {picture: 'img/th.png', name: 'タイ'},//THAILAND 
    {picture: 'img/tn.png', name: 'チュニジア'},//TUNISIA 
    {picture: 'img/tr.png', name: 'トルコ'},//TURKEY 
    {picture: 'img/tv.png', name: 'ツバル'}, //TUVALU 
    {picture: 'img/ve.png', name: 'ベネズエラ'},//VENEZUELA 
    {picture: 'img/vn.png', name: 'ベトナム'},//VIETNAM 
    {picture: 'img/ye.png', name: 'イエメン'},//YEMEN    
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

// PART 0: Practice.
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
    <p>練習はこれで終わりです。</p> 
    <p>「START」をクリックすると、本実験が始まります。</p>
    </div>   
    `,
  choices: ['START'],
  post_trial_gap: 0,

};
main_timeline.push(practice_end);


// randomize list for studying
var sample_size = 60;  // Use 100 items for the task, 20 for debugging
var study_variables = jsPsych.randomization.sampleWithoutReplacement(variables,sample_size);
console.log(study_variables); //show the item sample in console for debugging


// PART 1: Study.
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


var n_sets = 3;  //number of repetitions for the section. D
var block_size = 15; //number of elements to study in one block. Debug: 5, Real task: 20
var n_blocks = sample_size / block_size;  // The result of this operation must always be an integer
console

var i = 0;
while (i < n_sets) {
  //first we define where the block starts and where it ends    
  var first_el = 0;
  var last_el = block_size;

  //shuffle the list
  var random_study = jsPsych.randomization.sampleWithoutReplacement(study_variables, sample_size);

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


//PART 2. TEST
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

/*
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
*/


// Function to generate incorrect options by excluding the correct answer
function getIncorrectOptions(correct_answer, all_options, num_incorrect) {
  // Filter out the correct answer from the list of all options
  var incorrect_pool = all_options.filter(function(item) {
    return item.name !== correct_answer;
  });
  
  // Randomly select a number of incorrect options from the pool
  return jsPsych.randomization.sampleWithoutReplacement(incorrect_pool.map(item => item.name), num_incorrect);
}

// Generate trials dynamically from the study variables
var trials = [];
for (var i = 0; i < study_variables.length; i++) {
  var correct_answer = study_variables[i].name;
  
  // Get 3 incorrect options dynamically
  var incorrect_options = getIncorrectOptions(correct_answer, study_variables, 3);
  
  // Create a trial with the correct and incorrect options
  trials.push({
    picture: study_variables[i].picture,
    name: correct_answer,
    incorrect_options: incorrect_options
  });
}


// Multiple choice
var test_trial = {
  type: jsPsychSurveyMultiChoice,
  preamble: function() {
    return `<img src='${jsPsych.timelineVariable("picture")}'></img>`;
  },
  questions: [
    {
      prompt: function () {
        return `<div style="font-size:24px; color:beige">
                <p>この旗は何国のですか？</p>
                <div style="font-size:108px;bottom:0px;position:absolute;right:10px;"><p>.</p></div>
                </div>`;
      },
      options: function() {
        // Options pool (including the correct answer)
        var correct_answer = jsPsych.timelineVariable('name');
        var incorrect_answers = jsPsych.timelineVariable('incorrect_options');
        
        // Combine the correct and incorrect answers into a single array
        var options = incorrect_answers.slice(); // Copy the incorrect answers array
        options.push(correct_answer);
        
        // Shuffle the options to randomize their positions
        //return jsPsych.randomization.shuffle(options);
        var shuffled_options = jsPsych.randomization.shuffle(options);       

        return shuffled_options;         

      },
      required: true,
      horizontal: false // Set to true if you want the options horizontally
    }
  ],
  data: {
    task: 'test',
    item_name: jsPsych.timelineVariable('name'),
    correct_answer: jsPsych.timelineVariable('name') // Storing the correct answer
  },
  on_finish: function(data) {
    // Mark the trial as correct or incorrect
    var selected_answer = data.response.Q0; // Accessing the selected answer (Q0 is the index of the first question)
    data.correct = (selected_answer === jsPsych.timelineVariable('name')); // Comparing with the correct answer
  },
  on_load: function() {
    // Apply custom styling to the options after the page loads
    var option_elements = document.querySelectorAll('label.jspsych-survey-multi-choice-text');
    option_elements.forEach(function(el) {
      el.style.fontSize = '24px';  // Change the font size
      el.style.color = 'beige';  // Change the color
    });
  }
};

// Randomize the order of the trials
var randomized_trials = jsPsych.randomization.shuffle(trials);

// Loop through the randomized trials and push them to the timeline
var timeline = [];
for (var i = 0; i < randomized_trials.length; i++) {
  main_timeline.push({
    timeline: [fixation,test_trial], // test_trial from earlier
    timeline_variables: [randomized_trials[i]]
  });
}


/*
var test = {
  timeline: [fixation, test_trial],
  timeline_variables: study_variables,
  randomize_order: true
};
main_timeline.push(test);
*/

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
