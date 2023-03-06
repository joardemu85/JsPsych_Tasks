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
      'img/Gavial.jpg', 
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
      'img/Nightingale.jpg', 
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
      'img/Quoll.jpg', 
      'img/Rabbit.jpg', 
      'img/Racoon.jpg', 
      'img/Ram.jpg', 
      'img/Rattlesnake.jpg', 
      'img/Raven.jpg', 
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
      'img/Swallow.jpg', 
      'img/Swan.jpg', 
      'img/Tapir.jpg', 
      'img/Tasmanian_Devil.jpg', 
      'img/Tiger.jpg', 
      'img/Toad.jpg', 
      'img/Tortoise.jpg', 
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
   {picture: 'img/Aardvark.jpg',  name: 'AARDVARK'},
   {picture: 'img/Albatross.jpg', name: 'ALBATROSS'},
   {picture: 'img/Alligator.jpg', name: 'ALLIGATOR'},
   {picture: 'img/Ant.jpg', name: 'ANT'},
   {picture: 'img/Armadilo.jpg', name: 'ARMADILO'},
   {picture: 'img/Baboon.jpg', name: 'BABOON'},
   {picture: 'img/Badger.jpg', name: 'BADGER'},
   {picture: 'img/Bandicoot.jpg', name: 'BANDICOOT'},
   {picture: 'img/Beaver.jpg', name: 'BEAVER'},
   {picture: 'img/Beetle.jpg', name: 'BEETLE'},
   {picture: 'img/Billby.jpg', name: 'BILLBY'},
   {picture: 'img/Boar.jpg', name: 'BOAR'},
   {picture: 'img/Butterfly.jpg', name: 'BUTTERFLY'},
   {picture: 'img/Capybara.jpg', name: 'CAPYBARA'},
   {picture: 'img/Centipede.jpg', name: 'CENTIPEDE'},
   {picture: 'img/Cheetah.jpg', name: 'CHEETAH'},
   {picture: 'img/Chimpanzee.jpg', name: 'CHIMPANZEE'},
   {picture: 'img/Cockatoo.jpg', name: 'COCKATOO'},
   {picture: 'img/Cockroach.jpg', name: 'COCKROACH'},
   {picture: 'img/Condor.jpg', name: 'CONDOR'},
   {picture: 'img/Coyote.jpg', name: 'COYOTE'},
   {picture: 'img/Crayfish.jpg', name: 'CRAYFISH'},
   {picture: 'img/Crocodile.jpg', name: 'CROCODILE'},
   {picture: 'img/Crow.jpg', name: 'CROW'},
   {picture: 'img/Cuckoo.jpg', name: 'CUCKOO'},
   {picture: 'img/Deer.jpg', name: 'DEER'},
   {picture: 'img/Dingo.jpg', name: 'DINGO'},
   {picture: 'img/Donkey.jpg', name: 'DONKEY'},
   {picture: 'img/Dragonfly.jpg', name: 'DRAGONFLY'},
   {picture: 'img/Earthworm.jpg', name: 'EARTHWORM'},
   {picture: 'img/Echidna.jpg', name: 'ECHIDNA'},
   {picture: 'img/Elephant.jpg', name: 'ELEPHANT'},
   {picture: 'img/Elk.jpg', name: 'ELK'},
   {picture: 'img/Emu.jpg', name: 'EMU'},
   {picture: 'img/Falcon.jpg', name: 'FALCON'},
   {picture: 'img/Fennec.jpg', name: 'FENNEC'},
   {picture: 'img/Ferret.jpg', name: 'FERRET'},
   {picture: 'img/Fly.jpg', name: 'FLY'},
   {picture: 'img/Flying_Squirrel.jpg', name: 'FLYING SQUIRREL'},
   {picture: 'img/Fox.jpg', name: 'FOX'},
   {picture: 'img/Frog.jpg', name: 'FROG'},
   {picture: 'img/Gavial.jpg', name: 'GAVIAL'},
   {picture: 'img/Gekko.jpg', name: 'GECKO'},
   {picture: 'img/Goanna.jpg', name: 'GOANNA'},
   {picture: 'img/Goose.jpg', name: 'GOOSE'},
   {picture: 'img/Grasshopper.jpg', name: 'GRASSHOPPER'}, 
   {picture: 'img/Gull.jpg', name: 'GULL'},
   {picture: 'img/Hare.jpg', name: 'HARE'},
   {picture: 'img/Hedgehog.jpg', name: 'HEDGEHOG'},
   {picture: 'img/Hippopotamus.jpg', name: 'HIPPOPOTAMUS'},
   {picture: 'img/Honey_Badger.jpg', name: 'HONEY BADGER'},
   {picture: 'img/Hyena.jpg', name: 'HYENA'},
   {picture: 'img/Iguana.jpg', name: 'IGUANA'},
   {picture: 'img/Jaguar.jpg', name: 'JAGUAR'},
   {picture: 'img/Jellyfish.jpg', name: 'JELLYFISH'},
   {picture: 'img/Kangaroo.jpg', name: 'KANGAROO'},
   {picture: 'img/Kookaburra.jpg', name: 'KOOKABURRA'},
   {picture: 'img/Ladybug.jpg', name: 'LADYBUG'},
   {picture: 'img/Lamb.jpg', name: 'LAMB'},
   {picture: 'img/Leech.jpg', name: 'LEECH'},
   {picture: 'img/Leopard.jpg',  name: 'LEOPARD'},
   {picture: 'img/Lemur.jpg', name: 'LEMUR'},
   {picture: 'img/Lobster.jpg', name: 'LOBSTER'},
   {picture: 'img/Lynx.jpg', name: 'LYNX'},
   {picture: 'img/Lyrebird.jpg', name: 'LYREBIRD'},
   {picture: 'img/Marmot.jpg', name: 'MARMOT'},
   {picture: 'img/Millipede.jpg',name: 'MILLIPEDE'},
   {picture: 'img/Mink.jpg', name: 'MINK'},
   {picture: 'img/Mole.jpg', name: 'MOLE'},
   {picture: 'img/Mosquito.jpg', name: 'MOSQUITO'},
   {picture: 'img/Moth.jpg', name: 'MOTH'},
   {picture: 'img/Mule.jpg', name: 'MULE'},
   {picture: 'img/Nightingale.jpg', name: 'NIGHTINGALE'},
   {picture: 'img/Opossum.jpg', name: 'OPOSSUM'},
   {picture: 'img/Orangutan.jpg', name: 'ORANGUTAN'},
   {picture: 'img/Orca.jpg',name: 'ORCA'},
   {picture: 'img/Ostrich.jpg', name: 'OSTRICH'},
   {picture: 'img/Otter.jpg', name: 'OTTER'},
   {picture: 'img/Owl.jpg', name: 'OWL'},
   {picture: 'img/Pangolin.jpg', name: 'PANGOLIN'},
   {picture: 'img/Peacock.jpg', name: 'PEACOCK'},
   {picture: 'img/Pheasant.jpg', name: 'PHEASANT'},
   {picture: 'img/Platypus.jpg', name: 'PLATYPUS'},
   {picture: 'img/Porcupine.jpg', name: 'PORCUPINE'},
   {picture: 'img/Quokka.jpg', name: 'QUOKKA'},
   {picture: 'img/Quoll.jpg', name: 'QUOLL'},
   {picture: 'img/Rabbit.jpg', name: 'RABBIT'},
   {picture: 'img/Racoon.jpg', name: 'RACOON'},
   {picture: 'img/Ram.jpg', name: 'RAM'},
   {picture: 'img/Rattlesnake.jpg', name: 'RATTLESNAKE'},
   {picture: 'img/Raven.jpg', name: 'RAVEN'},
   {picture: 'img/Red_panda.jpg', name: 'RED PANDA'},
   {picture: 'img/Rhinoceross.jpg', name: 'RHINOCEROSS'},
   {picture: 'img/Salmon.jpg', name: 'SALMON'},
   {picture: 'img/Seal.jpg', name: 'SEAL'},
   {picture: 'img/Shark.jpg', name: 'SHARK'},
   {picture: 'img/Slug.jpg', name: 'SLUG'},
   {picture: 'img/Snail.jpg', name: 'SNAIL'},
   {picture: 'img/Sparrow.jpg', name: 'SPARROW'},
   {picture: 'img/Squirrel.jpg', name: 'SQUIRREL'},
   {picture: 'img/Stingray.jpg', name: 'SQUIRREL'},
   {picture: 'img/Sugar_Glider.jpg',name: 'SUGAR GLIDER'},
   {picture: 'img/Swallow.jpg', name: 'SWALLOW'},
   {picture: 'img/Swan.jpg', name: 'SWAN'},
   {picture: 'img/Tapir.jpg', name: 'TAPIR'},
   {picture: 'img/Tasmanian_Devil.jpg', name: 'TASMANIAN DEVIL'},
   {picture: 'img/Tiger.jpg', name: 'TIGER'},
   {picture: 'img/Toad.jpg', name: 'TOAD'},
   {picture: 'img/Tortoise.jpg', name: 'TORTOISE'},
   {picture: 'img/Trout.jpg', name: 'TROUT'},
   {picture: 'img/Turkey.jpg', name: 'TURKEY'},
   {picture: 'img/Turtle.jpg', name: 'TURTLE'},
   {picture: 'img/Viper.jpg', name: 'VIPER'},
   {picture: 'img/Vulture.jpg',name: 'VULTURE'},
   {picture: 'img/Wallaby.jpg', name: 'WALLABY'},
   {picture: 'img/Walrus.jpg', name: 'WALRUS'},
   {picture: 'img/Whale.jpg', name: 'WHALE'},
   {picture: 'img/Wolverine.jpg',name: 'WOLVERINE'},
   {picture: 'img/Wombat.jpg', name: 'WOMBAT'},
   {picture: 'img/Zebra.jpg', name: 'ZEBRA'},
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
    <div style="font-size:24px;">
    <p>Do you know the name of this animal?</p>
    </div>`

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
       //return jsPsych.randomization.sampleWithoutReplacement([500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
       return 100;
      }, 
    data: {
	    task: 'fixation'
	  }
}; 

var flashcard_pretest = {
    timeline: [pretest_pic,fixation],
    timeline_variables: sample_variables,
    randomize_order: false //no need to randomize again fetched items
 };
 main_timeline.push(flashcard_pretest);

var rest = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:32px;">Please wait a moment...you can take a short break</div>',
    choices: "NO_KEYS",
    trial_duration: 2000	  
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
    type: jsPsychHtmlKeyboardResponse,   
    stimulus: function (){
        return `<div style="font-size:72px;">${jsPsych.timelineVariable ("name")}</div>`;
    }, 
    //trial_duration: 1000,
    choices: ' ',
    response_ends_trial: true  
}; 

var n_trials = 4;  //number of repetitions on the study set play around with this one for debug
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
        timeline: [trial_pic,trial_name,fixation],
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
    </div>`
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
    </div>`
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
    trial_duration: 1000,
    //${jsPsych.timelineVariable ("name")}
    prompt: function (){
        return `
        <div style="font-size:24px;"><p>The right answer is:</p></div>
        <div style="font-size:42px;"><p>${jsPsych.timelineVariable ("name")}</p></div>`;
    },
    response_ends_trial: false  
}; 

var recognition_test = {
  timeline: [pic_test,if_node,feedback,fixation],
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