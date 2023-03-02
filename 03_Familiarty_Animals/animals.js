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
      'img/Capybara.jpg', 
      'img/Centipede.jpg', 
      'img/Cheetah.jpg', 
      'img/Chimpanzee.jpg', 
      'img/Cockatoo.jpg', 
      'img/Cockroach.jpg', 
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
      'img/Ferret.jpg', 
      'img/Fly.jpg', 
      'img/Flying_Squirrel.jpg', 
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
      'img/Leopard.jpg',  
      'img/Lobster.jpg', 
      'img/Lynx.jpg', 
      'img/Lyrebird.jpg', 
      'img/Marmot.jpg', 
      'img/Mink.jpg', 
      'img/Mole.jpg', 
      'img/Mosquito.jpg', 
      'img/Moth.jpg',
      'img/Mule.jpg', 
      'img/Nightingale.jpg', 
      'img/Opossum.jpg', 
      'img/Orangutan.jpg', 
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
      'img/Seal.jpg', 
      'img/Shark.jpg', 
      'img/Slug.jpg', 
      'img/Snail.jpg', 
      'img/Sparrow.jpg', 
      'img/Squirrel.jpg', 
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
      'img/Orca.jpg', 
      'img/Butterfly.jpg', 
      'img/Millipede.jpg']
 };
main_timeline.push(preload);

/*timeline variables*/
 var variables = [
   {picture: "img/Albatross.jpg", name: 'ALBATROSS'},
   {picture: "img/Alligator.jpg", name: 'ALLIGATOR'},
   {picture: "img/Ant.jpg", name: 'ANT'},
   {picture: "img/Armadilo.jpg", name: 'ARMADILO'},
   {picture: "img/Baboon.jpg", name: 'BABOON'},
   {picture: "img/Badger.jpg", name: 'BADGER'},
   {picture: "img/Bandicoot.jpg", name: 'BANDICOOT'},
   {picture: "img/Beaver.jpg", name: 'BEAVER'},
   {picture: "img/Beetle.jpg", name: 'BEETLE'},
   {picture: "img/Billby.jpg", name: 'BILLBY'},
   {picture: "img/Boar.jpg", name: 'BOAR'},
   {picture: "img/Capybara.jpg", name: 'CAPYBARA'},
   {picture: "img/Centipede.jpg", name: 'CENTIPEDE'},
   {picture: "img/Cheetah.jpg", name: 'CHEETAH'},
   {picture: "img/Chimpanzee.jpg", name: 'CHIMPANZEE'},
   {picture: "img/Cockatoo.jpg", name: 'COCKATOO'},
   {picture: "img/Cockroach.jpg", name: 'COCKROACH'},
   {picture: "img/Coyote.jpg", name: 'COYOTE'},
   {picture: "img/Crayfish.jpg", name: 'CRAYFISH'},
   {picture: "img/Crocodile.jpg", name: 'CROCODILE'},
   {picture: "img/Crow.jpg", name: 'CROW'},
   {picture: "img/Cuckoo.jpg", name: 'CUCKOO'},
   {picture: "img/Deer.jpg", name: 'DEER'},
   {picture: "img/Dingo.jpg", name: 'DINGO'},
   {picture: "img/Donkey.jpg", name: 'DONKEY'},
   {picture: "img/Dragonfly.jpg", name: 'DRAGONFLY'},
   {picture: "img/Earthworm.jpg", name: 'EARTHWORM'},
   {picture: "img/Echidna.jpg", name: 'ECHIDNA'},
   {picture: "img/Elephant.jpg", name: 'ELEPHANT'},
   {picture: "img/Elk.jpg", name: 'ELK'},
   {picture: "img/Emu.jpg", name: 'EMU'},
   {picture: "img/Falcon.jpg", name: 'FALCON'},
   {picture: "img/Ferret.jpg", name: 'FERRET'},
   {picture: "img/Fly.jpg", name: 'FLY'},
   {picture: "img/Flying_Squirrel.jpg", name: 'FLYING SQUIRREL'},
   {picture: "img/Frog.jpg", name: 'FROG'},
   {picture: "img/Gavial.jpg", name: 'GAVIAL'},
   {picture: "img/Gekko.jpg", name: 'GECKO'},
   {picture: "img/Goanna.jpg", name: 'GOANNA'},
   {picture: "img/Goose.jpg", name: 'GOOSE'}
   ];
 
//LET'S START PLACING TRIALS FROM HERE    
  
/*The first trial will be a simple welcome message using the html-kbeyboard-response plugin.*/    
var welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:32px;">Welcome to the experiment. Press any key to begin.</div>`	  
};
main_timeline.push(welcome); 

var learn_instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="font-size:24px;">
    <p>In this part of the experiment, you will be shown a random pictures of animals followed by their names.</p>
    <p>The picture will reappear in a random way a 3 times, so you are able to associate
    the picture with the right name.</p>
    <p>After this session, you will be asked if you are able to remember the right name of the animal.</p>
    <div style='float: center;'><img src='img/Armadilo.jpg'></img>   
    </div>
    <p>Press any key to begin.</p>
    </div>
    `,
    post_trial_gap: 1000
};
main_timeline.push(learn_instructions);

//create new list whit shuffled elements, the second argument indicates the number of repetitions
var repeated_variables = jsPsych.randomization.repeat(variables,1);

//Initially, the picture will be shown
var trial_pic = {
   type: jsPsychImageKeyboardResponse,   
   stimulus: jsPsych.timelineVariable("picture"), 
   //stimulus: function (){
    //  return `<img src= "${jsPsych.timelineVariable ("picture")}" width="240" height="160"></img>`;
    //},
   trial_duration: 1000,  
   response_ends_trial: false 
};   

//The picture is followed by the name of the item
var trial_name = {
    type: jsPsychHtmlKeyboardResponse,   
    stimulus: function (){
        return `<div style="font-size:72px;">${jsPsych.timelineVariable ("name")}</div>`
    }, 
    trial_duration: 1000,
    response_ends_trial: false  
 };   

 var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:96px;">+</div>',
    choices: "NO_KEYS",
   trial_duration: 2000
  };
  
var flashcard_study = {
   timeline: [trial_pic,trial_name,fixation],
   timeline_variables: repeated_variables,   
};
main_timeline.push(flashcard_study);

var rest = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:32px;">Please wait a moment...you can take a short break</div>',
    choices: "NO_KEYS",
    trial_duration: 2000	  
};
main_timeline.push(rest);

var recog_instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="font-size:24px;">
    <p>Now you will be asked if you remember the right name of the animal shown before.</p>
    <p>Each animal picture will be shown once and you will click YES if you remember the right name of the animal or NO if you do not.</p>
    <p>Right after, you will be asked if you are confident on the name of the animal. Please click "Completely" if you are absolute sure 
    you can remember, "Barely" if you cannot remember the right name or "Just Guessing if you are not sure your answer is right".</p>
    <p>Press any key to begin.</p>
    </div>
    `,
    post_trial_gap: 2000
};
main_timeline.push(recog_instructions);

var trial_test = {
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    choices: ['Yes', 'No'],
    prompt:  `
    <div style="font-size:24px;">
    <p>Can you name this animal?</p>
    </div>`
};

var confidence = { 
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    choices: ['Completely', 'Barely', 'Just Guessing'],
    prompt: `<div style="font-size:24px;">
    <p>How confident do you feel about your decission?</p>
    </div>`
};

var randomized_variables = jsPsych.randomization.repeat(variables,1);

var recognition_test = {
  timeline: [trial_test,confidence,fixation],
  timeline_variables: randomized_variables, 
};
main_timeline.push(recognition_test);

var finalization = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <div style="font-size:32px;">
    <p>This is the end of the experiment.</p>
    <p>Thank you very much for your participation.</p>
    </div>`,
    post_trial_gap: 2000
};
main_timeline.push(finalization);

/*and then, run the timeline*/
jsPsych.run(main_timeline);

