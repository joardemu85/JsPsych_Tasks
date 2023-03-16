var jsPsych = initJsPsych({
    on_finish: function() {
        jsPsych.data.displayData();
    }
});

/*declare main timeline*/
var main_timeline = [];

/*Preload Media*/
var preload = {
    type: jsPsychPreload,
    images: [
      'img/Aardvark.jpg', 
      'img/Albatross.jpg', 
      'img/Alligator.jpg', 
      'img/Ant.jpg', 
      'img/Armadilo.jpg',
      'img/Baboon.jpg', 
      'img/Badger.jpg', 
      'img/Bandicoot.jpg',
      'img/Beaver.jpg', 
      'img/Beetle.jpg', 
      'img/Billby.jpg', 
      'img/Boar.jpg', 
      'img/Butterfly.jpg', 
      'img/Capybara.jpg', 
      'img/Centipede.jpg', 
      'img/Cheetah.jpg', 
      'img/Chimpanzee.jpg', 
      'img/Cockatoo.jpg', 
      'img/Cockroach.jpg', 
      'img/Condor.jpg',
      'img/Coyote.jpg', 
      'img/Crayfish.jpg', 
      'img/Crocodile.jpg', 
      'img/Crow.jpg', 
      'img/Cuckoo.jpg', 
      'img/Deer.jpg', 
      'img/Dingo.jpg', 
      'img/Donkey.jpg', 
      'img/Dragonfly.jpg', 
      'img/Earthworm.jpg',
      'img/Echidna.jpg', 
      'img/Elephant.jpg', 
      'img/Elk.jpg', 
      'img/Emu.jpg', 
      'img/Falcon.jpg', 
      'img/Fennec.jpg', 
      'img/Ferret.jpg', 
      'img/Fly.jpg', 
      'img/Flying_Squirrel.jpg',
      'img/Fox.jpg',  
      'img/Frog.jpg',       
      'img/Gekko.jpg', 
      'img/Goanna.jpg', 
      'img/Goose.jpg', 
      'img/Grasshopper.jpg', 
      'img/Gull.jpg', 
      'img/Hare.jpg', 
      'img/Hedgehog.jpg', 
      'img/Hippopotamus.jpg', 
      'img/Honey_Badger.jpg', 
      'img/Hyena.jpg', 
      'img/Iguana.jpg', 
      'img/Jaguar.jpg', 
      'img/Jellyfish.jpg', 
      'img/Kangaroo.jpg', 
      'img/Kookaburra.jpg', 
      'img/Ladybug.jpg', 
      'img/Lamb.jpg', 
      'img/Leech.jpg', 
      'img/Lemur.jpg',
      'img/Leopard.jpg',  
      'img/Lobster.jpg', 
      'img/Lynx.jpg', 
      'img/Lyrebird.jpg', 
      'img/Marmot.jpg', 
      'img/Millipede.jpg',
      'img/Mink.jpg', 
      'img/Mole.jpg', 
      'img/Mosquito.jpg', 
      'img/Moth.jpg',
      'img/Mule.jpg',        
      'img/Opossum.jpg', 
      'img/Orangutan.jpg', 
      'img/Orca.jpg',
      'img/Ostrich.jpg', 
      'img/Otter.jpg', 
      'img/Owl.jpg', 
      'img/Pangolin.jpg', 
      'img/Peacock.jpg', 
      'img/Pheasant.jpg', 
      'img/Platypus.jpg', 
      'img/Porcupine.jpg', 
      'img/Quokka.jpg',        
      'img/Rabbit.jpg', 
      'img/Racoon.jpg', 
      'img/Ram.jpg', 
      'img/Rattlesnake.jpg', 
      'img/Red_panda.jpg', 
      'img/Rhinoceross.jpg', 
      'img/Salmon.jpg',
      'img/Seal.jpg', 
      'img/Shark.jpg', 
      'img/Slug.jpg', 
      'img/Snail.jpg', 
      'img/Sparrow.jpg', 
      'img/Squirrel.jpg',
      'img/Stingray.jpg', 
      'img/Sugar_Glider.jpg',       
      'img/Swan.jpg', 
      'img/Tapir.jpg', 
      'img/Tasmanian_Devil.jpg', 
      'img/Tiger.jpg', 
      'img/Toad.jpg', 
      'img/Trout.jpg', 
      'img/Turkey.jpg', 
      'img/Turtle.jpg', 
      'img/Viper.jpg', 
      'img/Vulture.jpg',
      'img/Wallaby.jpg', 
      'img/Walrus.jpg', 
      'img/Whale.jpg', 
      'img/Wolverine.jpg',
      'img/Wombat.jpg',
      'img/Zebra.jpg'     
      ] 
 };
main_timeline.push(preload);

/*timeline variables*/
 var variables = [
   {picture: 'img/Aardvark.jpg',  name: 'AARDVARK'}, //ツチブタ
   {picture: 'img/Albatross.jpg', name: 'ALBATROSS'}, //アルバトロス
   {picture: 'img/Alligator.jpg', name: 'ALLIGATOR'}, //アリゲーター
   {picture: 'img/Ant.jpg', name: 'ANT'}, //蟻
   {picture: 'img/Armadilo.jpg', name: 'ARMADILO'}, //アルマジロ
   {picture: 'img/Baboon.jpg', name: 'BABOON'}, //ヒヒ
   {picture: 'img/Badger.jpg', name: 'BADGER'}, // 狸
   {picture: 'img/Bandicoot.jpg', name: 'BANDICOOT'}, //バンディクート
   {picture: 'img/Beaver.jpg', name: 'BEAVER'}, //ビーバー
   {picture: 'img/Beetle.jpg', name: 'BEETLE'},//甲虫
   {picture: 'img/Billby.jpg', name: 'BILLBY'},//ビルビー
   {picture: 'img/Boar.jpg', name: 'BOAR'},//いのしし
   {picture: 'img/Butterfly.jpg', name: 'BUTTERFLY'},//蝶
   {picture: 'img/Capybara.jpg', name: 'CAPYBARA'},//カピバラ
   {picture: 'img/Centipede.jpg', name: 'CENTIPEDE'},//ムカデ
   {picture: 'img/Cheetah.jpg', name: 'CHEETAH'},//チーター
   {picture: 'img/Chimpanzee.jpg', name: 'CHIMPANZEE'},//チンパンジー
   {picture: 'img/Cockatoo.jpg', name: 'COCKATOO'},//コカトゥー
   {picture: 'img/Cockroach.jpg', name: 'COCKROACH'},//ゴキブリ
   {picture: 'img/Condor.jpg', name: 'CONDOR'},//兀鷹
   {picture: 'img/Coyote.jpg', name: 'COYOTE'},//コヨーテ
   {picture: 'img/Crayfish.jpg', name: 'CRAYFISH'},//ザリガニ
   {picture: 'img/Crocodile.jpg', name: 'CROCODILE'},//鰐
   {picture: 'img/Crow.jpg', name: 'CROW'},//カラス consider removing this one or raven
   {picture: 'img/Cuckoo.jpg', name: 'CUCKOO'}, // カッコウ
   {picture: 'img/Deer.jpg', name: 'DEER'}, //鹿
   {picture: 'img/Dingo.jpg', name: 'DINGO'},//ディンゴ
   {picture: 'img/Donkey.jpg', name: 'DONKEY'},//ロバ
   {picture: 'img/Dragonfly.jpg', name: 'DRAGONFLY'},//トンボ
   {picture: 'img/Earthworm.jpg', name: 'EARTHWORM'},//ミミズ
   {picture: 'img/Echidna.jpg', name: 'ECHIDNA'},//エキドナ
   {picture: 'img/Elephant.jpg', name: 'ELEPHANT'},//象
   {picture: 'img/Elk.jpg', name: 'ELK'},//エルク
   {picture: 'img/Emu.jpg', name: 'EMU'},//エミュ
   {picture: 'img/Falcon.jpg', name: 'FALCON'},//鷹
   {picture: 'img/Fennec.jpg', name: 'FENNEC'},//フェネック
   {picture: 'img/Ferret.jpg', name: 'FERRET'},//フェレット
   {picture: 'img/Fly.jpg', name: 'FLY'}, //蝿
   {picture: 'img/Flying_Squirrel.jpg', name: 'FLYING SQUIRREL'}, //むささび
   {picture: 'img/Fox.jpg', name: 'FOX'}, //狐
   {picture: 'img/Frog.jpg', name: 'FROG'}, //蛙   
   {picture: 'img/Gekko.jpg', name: 'GECKO'}, //ヤモリ
   {picture: 'img/Goanna.jpg', name: 'GOANNA'}, //ゴアナ
   {picture: 'img/Goose.jpg', name: 'GOOSE'}, //ガチョウ
   {picture: 'img/Grasshopper.jpg', name: 'GRASSHOPPER'}, //バッタ
   {picture: 'img/Gull.jpg', name: 'GULL'}, //ガル
   {picture: 'img/Hare.jpg', name: 'HARE'}, //野ウサギ
   {picture: 'img/Hedgehog.jpg', name: 'HEDGEHOG'}, //ハリネズミ
   {picture: 'img/Hippopotamus.jpg', name: 'HIPPOPOTAMUS'}, // カバ
   {picture: 'img/Honey_Badger.jpg', name: 'HONEY BADGER'}, //ラーテル
   {picture: 'img/Hyena.jpg', name: 'HYENA'}, //ハイエナ
   {picture: 'img/Iguana.jpg', name: 'IGUANA'}, //イグアナ
   {picture: 'img/Jaguar.jpg', name: 'JAGUAR'}, //ジャガー
   {picture: 'img/Jellyfish.jpg', name: 'JELLYFISH'}, //クラゲ
   {picture: 'img/Kangaroo.jpg', name: 'KANGAROO'}, // カンガルー
   {picture: 'img/Kookaburra.jpg', name: 'KOOKABURRA'}, //ワライカワセミ
   {picture: 'img/Ladybug.jpg', name: 'LADYBUG'}, // てんとう虫
   {picture: 'img/Lamb.jpg', name: 'LAMB'}, //子羊
   {picture: 'img/Leech.jpg', name: 'LEECH'}, //リーチ
   {picture: 'img/Leopard.jpg',  name: 'LEOPARD'},//ヒョウ
   {picture: 'img/Lemur.jpg', name: 'LEMUR'}, //キツネザル
   {picture: 'img/Lobster.jpg', name: 'LOBSTER'},// イセエビ
   {picture: 'img/Lynx.jpg', name: 'LYNX'}, //リンクス
   {picture: 'img/Lyrebird.jpg', name: 'LYREBIRD'}, //ライバード
   {picture: 'img/Marmot.jpg', name: 'MARMOT'},//マーモット
   {picture: 'img/Millipede.jpg',name: 'MILLIPEDE'},//ヤスデ
   {picture: 'img/Mink.jpg', name: 'MINK'}, //ミンク
   {picture: 'img/Mole.jpg', name: 'MOLE'}, //モグラ
   {picture: 'img/Mosquito.jpg', name: 'MOSQUITO'}, //蚊
   {picture: 'img/Moth.jpg', name: 'MOTH'}, //蛾
   {picture: 'img/Mule.jpg', name: 'MULE'}, //ラバ   
   {picture: 'img/Opossum.jpg', name: 'OPOSSUM'}, //袋鼠
   {picture: 'img/Orangutan.jpg', name: 'ORANGUTAN'}, //オランウータン
   {picture: 'img/Orca.jpg',name: 'ORCA'}, //シャチ
   {picture: 'img/Ostrich.jpg', name: 'OSTRICH'}, //ダチョウ
   {picture: 'img/Otter.jpg', name: 'OTTER'}, //カワウソ
   {picture: 'img/Owl.jpg', name: 'OWL'}, //フクロウ
   {picture: 'img/Pangolin.jpg', name: 'PANGOLIN'}, //センザンコウ
   {picture: 'img/Peacock.jpg', name: 'PEACOCK'}, //孔雀
   {picture: 'img/Pheasant.jpg', name: 'PHEASANT'}, // キジ
   {picture: 'img/Platypus.jpg', name: 'PLATYPUS'}, //カモノハシ
   {picture: 'img/Porcupine.jpg', name: 'PORCUPINE'}, //ヤマアラシ
   {picture: 'img/Quokka.jpg', name: 'QUOKKA'}, //クオッカ   
   {picture: 'img/Rabbit.jpg', name: 'RABBIT'}, //兎
   {picture: 'img/Racoon.jpg', name: 'RACOON'}, //あらいぐま
   {picture: 'img/Ram.jpg', name: 'RAM'}, //exclude
   {picture: 'img/Rattlesnake.jpg', name: 'RATTLESNAKE'}, //ガラガラヘビ
   {picture: 'img/Red_panda.jpg', name: 'RED PANDA'}, //レッサーパンダ
   {picture: 'img/Rhinoceross.jpg', name: 'RHINOCEROSS'}, //サイ
   {picture: 'img/Salmon.jpg', name: 'SALMON'}, //鮭
   {picture: 'img/Seal.jpg', name: 'SEAL'}, //海豹
   {picture: 'img/Shark.jpg', name: 'SHARK'}, //鮫
   {picture: 'img/Slug.jpg', name: 'SLUG'}, //ナメクジ
   {picture: 'img/Snail.jpg', name: 'SNAIL'}, //カタツムリ
   {picture: 'img/Sparrow.jpg', name: 'SPARROW'}, //スズメ
   {picture: 'img/Squirrel.jpg', name: 'SQUIRREL'}, //リス
   {picture: 'img/Stingray.jpg', name: 'STINGRAY'},  //エイ
   {picture: 'img/Sugar_Glider.jpg',name: 'SUGAR GLIDER'}, //フクロモモンガ   
   {picture: 'img/Swan.jpg', name: 'SWAN'}, //白鳥
   {picture: 'img/Tapir.jpg', name: 'TAPIR'}, //バク
   {picture: 'img/Tasmanian_Devil.jpg', name: 'TASMANIAN DEVIL'}, //タスマニアデビル
   {picture: 'img/Tiger.jpg', name: 'TIGER'}, //虎
   {picture: 'img/Toad.jpg', name: 'TOAD'}, //ヒキガエル
   {picture: 'img/Trout.jpg', name: 'TROUT'}, //マス
   {picture: 'img/Turkey.jpg', name: 'TURKEY'}, //シチメンチョウ
   {picture: 'img/Turtle.jpg', name: 'TURTLE'}, //亀
   {picture: 'img/Viper.jpg', name: 'VIPER'}, //毒へび
   {picture: 'img/Vulture.jpg',name: 'VULTURE'}, //禿鷹
   {picture: 'img/Wallaby.jpg', name: 'WALLABY'}, //ワラビー
   {picture: 'img/Walrus.jpg', name: 'WALRUS'}, //セイウチ
   {picture: 'img/Whale.jpg', name: 'WHALE'}, //鯨
   {picture: 'img/Wolverine.jpg',name: 'WOLVERINE'}, //クズリ
   {picture: 'img/Wombat.jpg', name: 'WOMBAT'}, // ウォンバット
   {picture: 'img/Zebra.jpg', name: 'ZEBRA'}, //シマウマ
   ];
 
//LET'S START PLACING TRIALS FROM HERE    
  
//The first trial will be a simple welcome message using the html-kbeyboard-response plugin.   
var welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div style="font-size:32px;">
               <p>Welcome to the experiment.</p> 
               <p>Tap "START" to begin.</p>
               </div>`,
               choices: ['START']
};
main_timeline.push(welcome);

//Select a sample of the total items in the list, this can be changed depending of the time available for the task
var sample_size = 20;
var sample_variables = jsPsych.randomization.sampleWithoutReplacement(variables,sample_size);
console.log(sample_variables); //show the item sample in console for debugging


// PART 1: PRE-TEST.

var pretest_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px;">
    <div style='float: center;'><img src='img/Armadilo.jpg'></img> 
    <p>In this part of the experiment, you will be shown a set of pictures of animals.</p>
    <p>You will be asked if you can name the animal that is shown on screen.</p>
    <p>Tap YES if you can tell the animal's name to or NO if you do not.</p>
    </div>
    <p>Tap "START" to begin</p>
    </div>
    `,
    choices: ['START'],
    post_trial_gap: 250
};
main_timeline.push(pretest_instructions);


var pretest_pic = {
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    stimulus_width: 640,
    stimulus_height: 480,
    choices: ['Yes', 'No'],
    prompt:  `
    <p>
    <div style="font-size:24px;"> Do you know the name of this animal?</div> 
    </p>       
    `
    //prompt for debugging purposes only, shows the name of the country
    //prompt: function (){
    //    return `
    //      <div style="font-size:42px;"><p>${jsPsych.timelineVariable ("name")}</p></div>`;
    //},
};

 
//Fixation cross inbetween trials 
var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:96px;">+</div>',
    choices: "NO_KEYS",
    trial_duration: function(){
       //return jsPsych.randomization.sampleWithoutReplacement([800, 900, 1000, 1200, 1300], 1)[0];
       return 500; //fixation time for debugging
      }, 
    data: {
	    task: 'fixation'
	  }
}; 

var flashcard_pretest = {
    timeline: [fixation, pretest_pic],
    timeline_variables: sample_variables,
    randomize_order: false //no need to randomize again fetched items
 };
 main_timeline.push(flashcard_pretest);

var rest = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div style="font-size:32px;">
               <p>You can take a short break now.</p>
               <p>Please tap CONTINUE button when you are ready.</p>
               </div>`,
    choices: ['Continue'],
    response_ends_trial: true	  
};
main_timeline.push(rest);


//PART 2. STUDY

// Study items Change trial duration and response ends trial attributes for debugging
var study_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px;">
    <div style='float: center;'><img src='img/gOOSE.JPg' width="320" height="240"></img> 
    <p>Now, you will perform a study session of the items .</p>
    <p>Each animal will appear followed by its name in sets with a short break between sets.</p> 
    <p>Hit the SPACE bar to move on to the next item.</p>    
    <p>You will practice on the whole list of items 4 times.</p>   
    </div>
    <p>Tap "START" to begin.</p>
    </div>
    `,
    choices: ['START'],
    post_trial_gap: 500
};
main_timeline.push(study_instructions);

//Initially, the picture will be shown
var trial_pic = {
    type: jsPsychImageKeyboardResponse,   
    stimulus: jsPsych.timelineVariable("picture"),
    stimulus_width: 640,
    stimulus_height: 480,
    trial_duration: 1000,  
    response_ends_trial: false
 }; 

 //The picture is followed by the name of the item
 var trial_name = {
    type: jsPsychHtmlButtonResponse,   
    stimulus: function (){
        return `<div style="font-size:72px;">
        <p>${jsPsych.timelineVariable ("name")}</p>
        </div>`;
    }, 
    //trial_duration: 1000,
    choices: ['Next'],
    response_ends_trial: true  
}; 

var n_trials = 2;  //number of repetitions on the study set play around with this one for debug
var chunk_size = 5; //number of elements to study in one set
var n_sets = sample_size/chunk_size;  // The result of this operation must always be an integer

//one trial consists of the study of the whole list divided into 5 chunks with the same number of items
for (var i=0; i<n_trials; i++){

//first we define where the chunk starts and where it ends    
var first_el = 0;
var last_el = chunk_size;

//randomize the whole list without repetition
var random_study = jsPsych.randomization.sampleWithoutReplacement(sample_variables,sample_size); 
console.log(random_study);
 
 for (var k=0; k<n_sets; k++) {
    
    //Inside this loop, we go through the whole item list in sets defined by chunk_size variable,
    //Every set will be studied once, when the whole list is done, it will restart 
    
    set = random_study.slice(first_el, last_el);
    console.log(set);

    var study_set = {
        timeline: [fixation,trial_pic,trial_name],
        timeline_variables: set  
     };
     main_timeline.push(study_set,rest);
     
     //once the set is displayed for study, the indeces are shifted to continue with the next set
     first_el = first_el+chunk_size;
     last_el = last_el+chunk_size; 
     
    }   
}

//PART 3. TEST
var test_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px;">
    <div style='float: center;'><img src='img/Coyote.jpg' width="320" height="240"></img> 
    <p>Now you will be asked if you remember the right name of the animals associated to their pictures.</p>
    <p>Each animal will be shown once and you will click YES if you remember the right name or NO if you do not.</p>
    <p>If you answer YES, you will be asked if you are confident on the name of the animal. Please click "Completely" if you are absolutely sure 
    you can remember, or "Just Guessing if you are not sure your answer is right".</p>    <p>Tap "START" to begin.</p>
    </div>
    `,
    choices: ['START'],
    post_trial_gap: 1000
};
main_timeline.push(test_instructions);


//pre if (see if I can use the same node as in the pretest)
var pic_test = {
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    stimulus_width: 640,
    stimulus_height: 480,
    choices: ['Yes', 'No'],
    prompt:  `
    <div style="font-size:24px;">
    <p>Do you know the name of this animal?</p>
    </div>
    `
};

//if trial
var confidence = { 
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    stimulus_width: 640,
    stimulus_height: 480,    
    choices: ['Completely', 'Just Guessing'],
    prompt: `<div style="font-size:24px;">
    <p>How confident do you feel about your decission?</p>
    </div>
    `
};

var if_node = {
  timeline: [confidence],
  conditional_function: function (){
    var data = jsPsych.data.get().last(1).values()[0];
    console.log(data); 
    if (data.response == 0){
      return true;
    }else {
      return false;
    }
  }
};

//after if
var feedback = { 
    type: jsPsychImageKeyboardResponse,   
    stimulus: jsPsych.timelineVariable("picture"),
    stimulus_width: 640,
    stimulus_height: 480,       
    trial_duration: 2000,
    //${jsPsych.timelineVariable ("name")}
    prompt: function (){
        return `
        <div style="font-size:24px;"><p>The right answer is:</p></div>
        <div style="font-size:42px;"><p>${jsPsych.timelineVariable ("name")}</p></div>`;
    },
    response_ends_trial: false  
}; 

var conf = { 
    type: jsPsychImageButtonResponse,   
    stimulus: jsPsych.timelineVariable("picture"),
    stimulus_width: 640,
    stimulus_height: 480,       
     prompt: function (){
        return `
        <div style="font-size:42px;"><p>${jsPsych.timelineVariable ("name")}</p></div>
        <div style="font-size:24px;"><p>Is this the name you remembered?</p>
        </div>
        `;},
    choices: ['Yes', 'No'],       
};

var if_node_2 = {
    timeline: [conf],
    conditional_function: function (){
      var data = jsPsych.data.get().last(2).values()[0];
      console.log(data); 
      if (data.response == 0){
        return true;
      }else {
        return false;
      }
    }
  };

var recognition_test = {
  timeline: [fixation,pic_test,if_node,feedback,if_node_2],
  timeline_variables: sample_variables,
  randomize_order: true 
};
main_timeline.push(recognition_test);

var finalization = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="font-size:48px;">
    <p>This is the end of the experiment.</p>
    <p>Thank you very much for your participation.</p>
    </div>`,
    post_trial_gap: 500
};
main_timeline.push(finalization);


//jsPsych.run([gb].concat(trials));
jsPsych.run(main_timeline);