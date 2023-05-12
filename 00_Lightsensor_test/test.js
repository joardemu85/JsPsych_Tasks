var jsPsych = initJsPsych({});

//declare main timeline
var main_timeline = [];

//Switch on fullscreen
var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
};
main_timeline.push(enter_fullscreen);


for (var i=0;i<20;i++){

    var sens_off = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:108px; color:beige">
               <p>SENSOR OFF</p>                
               </div>
              `,
    choices: "NO_KEYS",
    trial_duration: function(){
       return jsPsych.randomization.sampleWithoutReplacement([800, 900, 1000, 1200, 1300], 1)[0];
       //return 500; //value for debugging
      }
};
main_timeline.push(sens_off);

var sens_on = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div style="font-size:108px; color:beige">
               <p>SENSOR ON</p>  
               <div style="font-size:108px;top:325px;position:absolute;right:10px;"><p>.</p></div>
               </div>
              `,
    choices: "NO_KEYS",
    trial_duration: function(){
       return jsPsych.randomization.sampleWithoutReplacement([800, 900, 1000, 1200, 1300], 1)[0];
       //return 500; //value for debugging
      },     
};
main_timeline.push(sens_on);

}

var exit_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: false,
    delay_after: 0
};
main_timeline.push(exit_fullscreen);

 
jsPsych.run(main_timeline);



