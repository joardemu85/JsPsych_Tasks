var jsPsych = initJsPsych({
    on_finish: function() {
        jsPsych.data.displayData();
    }
});

//declare main timeline
var main_timeline = [];


//Preload Media
var preload = {
    type: jsPsychPreload,
    images: [
        'img/af.png',
        'img/al.png',
        'img/dz.png',
        'img/ad.png',
        'img/ao.png',
        'img/ag.png',
        'img/ar.png',
        'img/am.png',
        'img/au.png',
        'img/at.png',
        'img/az.png',
        'img/bs.png', 
        'img/bh.png',
        'img/bd.png',
        'img/bb.png',
        'img/by.png',
        'img/be.png',
        'img/bz.png',
        'img/bj.png',
        'img/bt.png',
        'img/bo.png',
        'img/ba.png',
        'img/bw.png',
        'img/br.png',
        'img/bn.png',
        'img/bg.png',
        'img/bf.png',
        'img/bi.png',
        'img/kh.png',
        'img/cm.png',
        'img/ca.png',
        'img/cv.png',
        'img/cf.png',
        'img/td.png',
        'img/cl.png',
        'img/cn.png',
        'img/co.png',
        'img/km.png',
        'img/cg.png',
        'img/cd.png',
        'img/cr.png',
        'img/ci.png',
        'img/hr.png',
        'img/cu.png',
        'img/cy.png',
        'img/cz.png',
        'img/dk.png',
        'img/dj.png',
        'img/dm.png',
        'img/do.png',
        'img/ec.png',
        'img/eg.png',
        'img/sv.png',
        'img/gq.png',
        'img/er.png',
        'img/ee.png',
        'img/sz.png',
        'img/et.png',
        'img/fj.png',
        'img/fi.png',
        'img/fr.png',
        'img/ga.png',
        'img/gm.png',
        'img/ge.png',
        'img/de.png',
        'img/gh.png',
        'img/gr.png',
        'img/gd.png',
        'img/gt.png',
        'img/gn.png',
        'img/gw.png',
        'img/gy.png',
        'img/ht.png',
        'img/hn.png',
        'img/hu.png',
        'img/is.png',
        'img/in.png',
        'img/id.png',
        'img/ir.png',
        'img/iq.png',
        'img/ie.png',
        'img/il.png',
        'img/it.png',
        'img/jm.png',
        'img/jp.png',
        'img/jo.png',
        'img/kz.png',
        'img/ke.png',
        'img/ki.png',
        'img/kp.png',
        'img/kr.png',
        'img/kw.png',
        'img/kg.png',
        'img/la.png',
        'img/lv.png',
        'img/lb.png',
        'img/ls.png',
        'img/lr.png',
        'img/ly.png',
        'img/li.png',
        'img/lt.png',
        'img/lu.png',
        'img/mg.png',
        'img/mw.png',
        'img/my.png',
        'img/mv.png',
        'img/ml.png',
        'img/mt.png',
        'img/mh.png',
        'img/mr.png',
        'img/mu.png',
        'img/mx.png',
        'img/fm.png',
        'img/md.png',
        'img/mc.png',
        'img/mn.png',
        'img/me.png',
        'img/ma.png',
        'img/mz.png',
        'img/mm.png',
        'img/na.png',
        'img/nr.png',
        'img/np.png',
        'img/nl.png',
        'img/nz.png',
        'img/ni.png',
        'img/ne.png',
        'img/ng.png',
        'img/mk.png',
        'img/no.png',
        'img/om.png',
        'img/pk.png',
        'img/pw.png',
        'img/pa.png',
        'img/pg.png',
        'img/py.png',
        'img/pe.png',
        'img/ph.png',
        'img/pl.png',
        'img/pt.png',
        'img/qa.png',
        'img/ro.png',
        'img/ru.png',
        'img/rw.png',
        'img/kn.png',
        'img/lc.png',
        'img/vc.png',
        'img/ws.png',
        'img/sm.png',
        'img/st.png',
        'img/sa.png',
        'img/sn.png',
        'img/rs.png',
        'img/sc.png',
        'img/sl.png',
        'img/sg.png',
        'img/sk.png',
        'img/si.png',
        'img/sb.png',
        'img/so.png',
        'img/za.png',
        'img/ss.png',
        'img/es.png',
        'img/lk.png',
        'img/sd.png',
        'img/sr.png',
        'img/se.png',
        'img/ch.png',
        'img/sy.png',
        'img/tj.png',
        'img/tz.png',
        'img/th.png',
        'img/tl.png',
        'img/tg.png',
        'img/to.png',
        'img/tt.png',
        'img/tn.png',
        'img/tr.png',
        'img/tm.png',
        'img/tv.png', 
        'img/ug.png',
        'img/ua.png',
        'img/ae.png',
        'img/gb.png',
        'img/us.png',
        'img/uy.png',
        'img/uz.png',
        'img/vu.png',
        'img/ve.png',
        'img/vn.png',
        'img/ye.png',
        'img/zm.png',
        'img/zw.png',
        'img/un.png'
    ]
};
main_timeline.push(preload);


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


//timeline variables
var variables = [
    //STAND ALONE FORMAT 
    {picture: 'img/af.png', name: 'AFGHANISTAN'},
    {picture: 'img/al.png', name: 'ALBANIA'},
    {picture: 'img/dz.png', name: 'ALGERIA'},
    {picture: 'img/ad.png', name: 'ANDORRA'},
    {picture: 'img/ao.png', name: 'ANGOLA'},
    {picture: 'img/ag.png', name: 'ANTIGUA AND BARBUDA'},
    {picture: 'img/ar.png', name: 'ARGENTINA'},
    {picture: 'img/am.png', name: 'ARMENIA'},
    {picture: 'img/au.png', name: 'AUSTRALIA'},
    {picture: 'img/at.png', name: 'AUSTRIA'},
    {picture: 'img/az.png', name: 'AZERBAIJAN'},
    {picture: 'img/bs.png', name: 'BAHAMAS'}, //
    {picture: 'img/bh.png', name: 'BAHARAIN'},
    {picture: 'img/bd.png', name: 'BANGLADESH'},
    {picture: 'img/bb.png', name: 'BARBADOS'},
    {picture: 'img/by.png', name: 'BELARUS'},
    {picture: 'img/be.png', name: 'BELGIUM'},
    {picture: 'img/bz.png', name: 'BELIZE'},
    {picture: 'img/bj.png', name: 'BENIN'},
    {picture: 'img/bt.png', name: 'BHUTAN'},
    {picture: 'img/bo.png', name: 'BOLIVIA'},
    {picture: 'img/ba.png', name: 'BOSNIA AND HERZEGOVINA'},
    {picture: 'img/bw.png', name: 'BOTSWANA'},
    {picture: 'img/br.png', name: 'BRAZIL'},
    {picture: 'img/bn.png', name: 'BRUNEI'},
    {picture: 'img/bg.png', name: 'BULGARIA'},
    {picture: 'img/bf.png', name: 'BURKINA FASO'},
    {picture: 'img/bi.png', name: 'BURUNDI'},
    {picture: 'img/kh.png', name: 'CAMBODIA'},
    {picture: 'img/cm.png', name: 'CAMEROON'},
    {picture: 'img/ca.png', name: 'CANADA'},
    {picture: 'img/cv.png', name: 'CAPE VERDE'},
    {picture: 'img/cf.png', name: 'CENTRAL AFRICAN REPUBLIC'},
    {picture: 'img/td.png', name: 'CHAD'},
    {picture: 'img/cl.png', name: 'CHILE'},
    {picture: 'img/cn.png', name: 'CHINA'},//
    {picture: 'img/co.png', name: 'COLOMBIA'},
    {picture: 'img/km.png', name: 'COMOROS'},
    {picture: 'img/cg.png', name: 'REPUBLIC OF THE CONGO'},
    {picture: 'img/cd.png', name: 'DR CONGO'},
    {picture: 'img/cr.png', name: 'COSTA RICA'},
    {picture: 'img/ci.png', name: 'IVORY COAST'},
    {picture: 'img/hr.png', name: 'CROATIA'},
    {picture: 'img/cu.png', name: 'CUBA'},
    {picture: 'img/cy.png', name: 'CYPRUS'},
    {picture: 'img/cz.png', name: 'CZECHIA'},
    {picture: 'img/dk.png', name: 'DENMARK'},
    {picture: 'img/dj.png', name: 'DJIBOUTI'},
    {picture: 'img/dm.png', name: 'DOMINICA'},
    {picture: 'img/do.png', name: 'DOMINICAN REPUBLIC'},
    {picture: 'img/ec.png', name: 'ECUADOR'},
    {picture: 'img/eg.png', name: 'EGYPT'},
    {picture: 'img/sv.png', name: 'EL SALVADOR'},
    {picture: 'img/gq.png', name: 'EQUATORIAL GUINEA'},
    {picture: 'img/er.png', name: 'ERITREA'},
    {picture: 'img/ee.png', name: 'ESTONIA'},
    {picture: 'img/sz.png', name: 'ESWATINI'},
    {picture: 'img/et.png', name: 'ETHIOPIA'},
    {picture: 'img/fj.png', name: 'FIJI'},
    {picture: 'img/fi.png', name: 'FINLAND'},//
    {picture: 'img/fr.png', name: 'FRANCE'},
    {picture: 'img/ga.png', name: 'GABON'},
    {picture: 'img/gm.png', name: 'GAMBIA'},
    {picture: 'img/ge.png', name: 'GEORGIA'},
    {picture: 'img/de.png', name: 'GERMANY'},
    {picture: 'img/gh.png', name: 'GHANA'},
    {picture: 'img/gr.png', name: 'GREECE'},
    {picture: 'img/gd.png', name: 'GRENADA'},
    {picture: 'img/gt.png', name: 'GUATEMALA'},
    {picture: 'img/gn.png', name: 'GUINEA'},
    {picture: 'img/gw.png', name: 'GUINEA-BISSAU'},
    {picture: 'img/gy.png', name: 'GUYANA'},
    {picture: 'img/ht.png', name: 'HAITI'},
    {picture: 'img/hn.png', name: 'HONDURAS'},
    {picture: 'img/hu.png', name: 'HUNGARY'},
    {picture: 'img/is.png', name: 'ICELAND'},
    {picture: 'img/in.png', name: 'INDIA'},
    {picture: 'img/id.png', name: 'INDONESIA'},
    {picture: 'img/ir.png', name: 'IRAN'},
    {picture: 'img/iq.png', name: 'IRAQ'},
    {picture: 'img/ie.png', name: 'IRELAND'},
    {picture: 'img/il.png', name: 'ISRAEL'},
    {picture: 'img/it.png', name: 'ITALY'},
    {picture: 'img/jm.png', name: 'JAMAICA'},//
    {picture: 'img/jp.png', name: 'JAPAN'},
    {picture: 'img/jo.png', name: 'JORDAN'},
    {picture: 'img/kz.png', name: 'KAZAKHSTAN'},
    {picture: 'img/ke.png', name: 'KENYA'},
    {picture: 'img/ki.png', name: 'KIRIBATI'},
    {picture: 'img/kp.png', name: 'NORTH KOREA'},
    {picture: 'img/kr.png', name: 'SOUTH KOREA'},
    {picture: 'img/kw.png', name: 'KUWAIT'},
    {picture: 'img/kg.png', name: 'KYRGYZSTAN'},
    {picture: 'img/la.png', name: 'LAOS'},
    {picture: 'img/lv.png', name: 'LATVIA'},
    {picture: 'img/lb.png', name: 'LEBANON'},
    {picture: 'img/ls.png', name: 'LESOTHO'},
    {picture: 'img/lr.png', name: 'LIBERIA'},
    {picture: 'img/ly.png', name: 'LIBYA'},
    {picture: 'img/li.png', name: 'LIECHTENSTEIN'},
    {picture: 'img/lt.png', name: 'LITHUANIA'},
    {picture: 'img/lu.png', name: 'LUXENBOURG'},
    {picture: 'img/mg.png', name: 'MADAGASCAR'},
    {picture: 'img/mw.png', name: 'MALAWI'},
    {picture: 'img/my.png', name: 'MALAYSIA'},
    {picture: 'img/mv.png', name: 'MALDIVES'},
    {picture: 'img/ml.png', name: 'MALI'},
    {picture: 'img/mt.png', name: 'MALTA'},//
    {picture: 'img/mh.png', name: 'MARSHALL ISLANDS'},
    {picture: 'img/mr.png', name: 'MAURITANIA'},
    {picture: 'img/mu.png', name: 'MAURITIUS'},
    {picture: 'img/mx.png', name: 'MEXICO'},
    {picture: 'img/fm.png', name: 'MICRONESIA'},
    {picture: 'img/md.png', name: 'MOLDOVA'},
    {picture: 'img/mc.png', name: 'MONACO'},
    {picture: 'img/mn.png', name: 'MONGOLIA'},
    {picture: 'img/me.png', name: 'MONTENEGRO'},
    {picture: 'img/ma.png', name: 'MOROCCO'},
    {picture: 'img/mz.png', name: 'MOZAMBIQUE'},
    {picture: 'img/mm.png', name: 'MYANMAR'},
    {picture: 'img/na.png', name: 'NAMIBIA'},
    {picture: 'img/nr.png', name: 'NAURU'},
    {picture: 'img/np.png', name: 'NEPAL'},
    {picture: 'img/nl.png', name: 'NETHERLANDS'},
    {picture: 'img/nz.png', name: 'NEW ZEALAND'},
    {picture: 'img/ni.png', name: 'NICARAGUA'},
    {picture: 'img/ne.png', name: 'NIGER'},
    {picture: 'img/ng.png', name: 'NIGERIA'},
    {picture: 'img/mk.png', name: 'NORTH MACEDONIA'},
    {picture: 'img/no.png', name: 'NORWAY'},
    {picture: 'img/om.png', name: 'OMAN'},
    {picture: 'img/pk.png', name: 'PAKISTAN'},//
    {picture: 'img/pw.png', name: 'PALAU'},
    {picture: 'img/pa.png', name: 'PANAMA'},
    {picture: 'img/pg.png', name: 'PAPUA NEW GUINEA'},
    {picture: 'img/py.png', name: 'PARAGUAY'},
    {picture: 'img/pe.png', name: 'PERU'},
    {picture: 'img/ph.png', name: 'PHILIPINES'},
    {picture: 'img/pl.png', name: 'POLAND'},
    {picture: 'img/pt.png', name: 'PORTUGAL'},
    {picture: 'img/qa.png', name: 'QATAR'},
    {picture: 'img/ro.png', name: 'ROMANIA'},
    {picture: 'img/ru.png', name: 'RUSSIA'},
    {picture: 'img/rw.png', name: 'RWANDA'},
    {picture: 'img/kn.png', name: 'SAINT KITTS AND NEVIS'},
    {picture: 'img/lc.png', name: 'SAINT LUCIA'},
    {picture: 'img/vc.png', name: 'SAINT VINCENT AND THE GRENADINES'},
    {picture: 'img/ws.png', name: 'SAMOA'},
    {picture: 'img/sm.png', name: 'SAN MARINO'},
    {picture: 'img/st.png', name: 'SAO TOME AND PRINCIPE'},
    {picture: 'img/sa.png', name: 'SAUDI ARABIA'},
    {picture: 'img/sn.png', name: 'SENEGAL'},
    {picture: 'img/rs.png', name: 'SERBIA'},
    {picture: 'img/sc.png', name: 'SEYCHELLES'},
    {picture: 'img/sl.png', name: 'SIERRA LEONE'},
    {picture: 'img/sg.png', name: 'SINGAPORE'},//
    {picture: 'img/sk.png', name: 'SLOVAKIA'},
    {picture: 'img/si.png', name: 'SLOVENIA'},
    {picture: 'img/sb.png', name: 'SOLOMON ISLANDS'},
    {picture: 'img/so.png', name: 'SOMALIA'},
    {picture: 'img/za.png', name: 'SOUTH AFRICA'},
    {picture: 'img/ss.png', name: 'SOUTH SUDAN'},
    {picture: 'img/es.png', name: 'SPAIN'},
    {picture: 'img/lk.png', name: 'SRI LANKA'},
    {picture: 'img/sd.png', name: 'SUDAN'},
    {picture: 'img/sr.png', name: 'SURINAME'},
    {picture: 'img/se.png', name: 'SWEEDEN'},
    {picture: 'img/ch.png', name: 'SWITZERLAND'},
    {picture: 'img/sy.png', name: 'SYRIA'},
    {picture: 'img/tj.png', name: 'TAJIKISTAN'},
    {picture: 'img/tz.png', name: 'TANZANIA'},
    {picture: 'img/th.png', name: 'THAILAND'},
    {picture: 'img/tl.png', name: 'TIMOR-LESTE'},
    {picture: 'img/tg.png', name: 'TOGO'},
    {picture: 'img/to.png', name: 'TONGA'},
    {picture: 'img/tt.png', name: 'TRINIDAD AND TOBAGO'},
    {picture: 'img/tn.png', name: 'TUNISIA'},
    {picture: 'img/tr.png', name: 'TURKEY'},
    {picture: 'img/tm.png', name: 'TURKMENISTAN'},
    {picture: 'img/tv.png', name: 'TUVALU'}, //
    {picture: 'img/ug.png', name: 'UGANDA'},
    {picture: 'img/ua.png', name: 'UKRAINE'},
    {picture: 'img/ae.png', name: 'UNITED ARAB EMIRATES'},
    {picture: 'img/gb.png', name: 'UNITED KINGDOM'},
    {picture: 'img/us.png', name: 'UNITED STATES'},
    {picture: 'img/uy.png', name: 'URUGUAY'},
    {picture: 'img/uz.png', name: 'UZBEKISTAN'},
    {picture: 'img/vu.png', name: 'VANUATU'},
    {picture: 'img/ve.png', name: 'VENEZUELA'},
    {picture: 'img/vn.png', name: 'VIETNAM'},
    {picture: 'img/ye.png', name: 'YEMEN'},
    {picture: 'img/zm.png', name: 'ZAMBIA'},
    {picture: 'img/zw.png', name: 'ZIMBABWE'}   
];    


var learn_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px;">
    <p>In this part of the experiment, you will be shown a random set of flags corresponding to UN member countries followed by their names.</p>
    <p>Each flag will reappear 3 times randomly, so you are able to associate the flag to the right country.</p>
    <p>After this session, you will be shown a flag and check if you are able to remember the right name of the country.</p>
    <div style='float: center;'><img src='img/un.png' width="320" height="240"></img>   
    </div>
    <p>Tap "START" to begin.</p>
    </div>
    `,
    choices: ['START'],
    post_trial_gap: 250
};
main_timeline.push(learn_instructions);

//create new list whit shuffled elements, the second argument indicates the number of repetitions
//var repeated_variables = jsPsych.randomization.repeat(variables,1);


//Initially, the picture will be shown
var trial_pic = {
   type: jsPsychImageKeyboardResponse,   
   stimulus: jsPsych.timelineVariable("picture"),
   stimulus_width: 640,
   stimulus_height: 480,
   trial_duration: 1000,  
   response_ends_trial: true
};  

//The picture is followed by the name of the item
var trial_name = {
    type: jsPsychHtmlKeyboardResponse,   
    stimulus: function (){
        return `<div style="font-size:72px;">${jsPsych.timelineVariable ("name")}</div>`;
    }, 
    trial_duration: 1000,
    response_ends_trial: true  
}; 

//Fixation cross inbetween trials 
var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:96px;">+</div>',
    choices: "NO_KEYS",
    trial_duration: function(){
       //return jsPsych.randomization.sampleWithoutReplacement([500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
       return 1000;
      }, 
    data: {
	    task: 'fixation'
	  }
}; 

var flashcard_study = {
   timeline: [trial_pic,trial_name,fixation],
   //timeline_variables: repeated_variables, 
   timeline_variables: variables  
};
main_timeline.push(flashcard_study);

var rest = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:32px;">Please wait a moment...you can take a short break</div>',
    choices: "NO_KEYS",
    trial_duration: 2000	  
};
main_timeline.push(rest);

/*
var recog_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px;">
    <p>Now you will be asked if you remember the right name of the animal shown before.</p>
    <p>Each animal picture will be shown once and you will click YES if you remember the right name of the animal or NO if you do not.</p>
    <p>Right after, you will be asked if you are confident on the name of the animal. Please click "Completely" if you are absolute sure 
    you can remember, "Barely" if you cannot remember the right name or "Just Guessing if you are not sure your answer is right".</p>
    <p>Tap "START" to begin.</p>
    </div>
    `,
    choices: ['START'],
    post_trial_gap: 1000
};
main_timeline.push(recog_instructions);

//pre if
var trial_test = {
    type: jsPsychImageButtonResponse,
    stimulus: jsPsych.timelineVariable("picture"),
    stimulus_width: 640,
    stimulus_height: 480,
    choices: ['Yes', 'No'],
    prompt:  `
    <div style="font-size:24px;">
    <p>Can you name this animal?</p>
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

var randomized_variables = jsPsych.randomization.repeat(variables,1);

var recognition_test = {
  timeline: [trial_test,if_node,feedback,fixation],
  //timeline: [trial_test,feedback,fixation],
  timeline_variables: randomized_variables, 
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
*/

//jsPsych.run([gb].concat(trials));
jsPsych.run(main_timeline);
