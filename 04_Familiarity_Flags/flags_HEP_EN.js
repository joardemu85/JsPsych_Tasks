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

//timeline variables
var variables = [
    //STAND ALONE FORMAT 
    {picture: 'img/af.png', name: 'AFGHANISTAN'}, // アフガニスタン
    {picture: 'img/al.png', name: 'ALBANIA'}, // アルバニア
    {picture: 'img/dz.png', name: 'ALGERIA'}, // アルジェリア
    {picture: 'img/ad.png', name: 'ANDORRA'}, // アンドラ
    {picture: 'img/ao.png', name: 'ANGOLA'}, // アンゴラ
    {picture: 'img/ag.png', name: 'ANTIGUA AND BARBUDA'},// アンティグア・バーブーダ
    {picture: 'img/ar.png', name: 'ARGENTINA'}, // アルゼンチン
    {picture: 'img/am.png', name: 'ARMENIA'}, // アルメニア
    {picture: 'img/au.png', name: 'AUSTRALIA'}, // オーストラリア
    {picture: 'img/at.png', name: 'AUSTRIA'}, // オーストリア
    {picture: 'img/az.png', name: 'AZERBAIJAN'}, // アゼルバイジャン
    {picture: 'img/bs.png', name: 'BAHAMAS'}, // バハマ
    {picture: 'img/bh.png', name: 'BAHARAIN'}, // バーレーン
    {picture: 'img/bd.png', name: 'BANGLADESH'}, // バングラデシュ
    {picture: 'img/bb.png', name: 'BARBADOS'},// バルバドス
    {picture: 'img/by.png', name: 'BELARUS'},// ベラルーシ
    {picture: 'img/be.png', name: 'BELGIUM'},// ベルギー
    {picture: 'img/bz.png', name: 'BELIZE'},// ベリーズ
    {picture: 'img/bj.png', name: 'BENIN'}, // ベナン
    {picture: 'img/bt.png', name: 'BHUTAN'}, // ブータン
    {picture: 'img/bo.png', name: 'BOLIVIA'}, // ボリビア
    {picture: 'img/ba.png', name: 'BOSNIA AND HERZEGOVINA'},// ボスニア・ヘルツェゴビナ
    {picture: 'img/bw.png', name: 'BOTSWANA'}, // ボツワナ
    {picture: 'img/br.png', name: 'BRAZIL'},// ブラジル
    {picture: 'img/bn.png', name: 'BRUNEI'}, // ブルネイ
    {picture: 'img/bg.png', name: 'BULGARIA'}, // ブルガリア
    {picture: 'img/bf.png', name: 'BURKINA FASO'}, // ブルキナファソ
    {picture: 'img/bi.png', name: 'BURUNDI'}, // ブルンジ
    {picture: 'img/kh.png', name: 'CAMBODIA'}, // カンボジア
    {picture: 'img/cm.png', name: 'CAMEROON'}, // カメルーン
    {picture: 'img/ca.png', name: 'CANADA'}, // カナダ
    {picture: 'img/cv.png', name: 'CAPE VERDE'}, // カーボベルデ 
    {picture: 'img/cf.png', name: 'CENTRAL AFRICAN REPUBLIC'},// 中央アフリカ 
    {picture: 'img/td.png', name: 'CHAD'}, // チャド
    {picture: 'img/cl.png', name: 'CHILE'}, // チリ
    {picture: 'img/cn.png', name: 'CHINA'}, // 中国
    {picture: 'img/co.png', name: 'COLOMBIA'}, // コロンビア
    {picture: 'img/km.png', name: 'COMOROS'}, // コモロ
    {picture: 'img/cg.png', name: 'REPUBLIC OF THE CONGO'}, // コンゴ
    {picture: 'img/cd.png', name: 'DR CONGO'},// コンゴ民主共和国
    {picture: 'img/cr.png', name: 'COSTA RICA'}, // コスタリカ
    {picture: 'img/ci.png', name: 'IVORY COAST'}, // コートジボワール
    {picture: 'img/hr.png', name: 'CROATIA'}, // クロアチア
    {picture: 'img/cu.png', name: 'CUBA'},// キューバ
    {picture: 'img/cy.png', name: 'CYPRUS'},// キプロス
    {picture: 'img/cz.png', name: 'CZECHIA'},// チェコ
    {picture: 'img/dk.png', name: 'DENMARK'}, // デンマーク
    {picture: 'img/dj.png', name: 'DJIBOUTI'}, //ジブチ
    {picture: 'img/dm.png', name: 'DOMINICA'}, //ドミニカ国
    {picture: 'img/do.png', name: 'DOMINICAN REPUBLIC'}, //ドミニカ共和国
    {picture: 'img/ec.png', name: 'ECUADOR'}, // エクアドル
    {picture: 'img/eg.png', name: 'EGYPT'}, // エジプト
    {picture: 'img/sv.png', name: 'EL SALVADOR'}, //エルサルバドル
    {picture: 'img/gq.png', name: 'EQUATORIAL GUINEA'}, // 赤道ギニア
    {picture: 'img/er.png', name: 'ERITREA'}, // エリトリア
    {picture: 'img/ee.png', name: 'ESTONIA'}, //エストニア
    {picture: 'img/sz.png', name: 'ESWATINI'}, // エスワティニ
    {picture: 'img/et.png', name: 'ETHIOPIA'}, // エチオピア
    {picture: 'img/fj.png', name: 'FIJI'},// フィジー
    {picture: 'img/fi.png', name: 'FINLAND'},// フィンランド
    {picture: 'img/fr.png', name: 'FRANCE'},// フランス
    {picture: 'img/ga.png', name: 'GABON'},// ガボン 
    {picture: 'img/gm.png', name: 'GAMBIA'},// ガンビア
    {picture: 'img/ge.png', name: 'GEORGIA'},// ジョージア
    {picture: 'img/de.png', name: 'GERMANY'}, //ドイツ
    {picture: 'img/gh.png', name: 'GHANA'}, // ガーナ
    {picture: 'img/gr.png', name: 'GREECE'},// ギリシャ
    {picture: 'img/gd.png', name: 'GRENADA'}, // グレナダ
    {picture: 'img/gt.png', name: 'GUATEMALA'}, // グアテマラ
    {picture: 'img/gn.png', name: 'GUINEA'},// ギニア
    {picture: 'img/gw.png', name: 'GUINEA-BISSAU'},// ギニアビサウ
    {picture: 'img/gy.png', name: 'GUYANA'},// ガイアナ
    {picture: 'img/ht.png', name: 'HAITI'},// ハイチ
    {picture: 'img/hn.png', name: 'HONDURAS'},// ホンジュラス
    {picture: 'img/hu.png', name: 'HUNGARY'},// ハンガリー
    {picture: 'img/is.png', name: 'ICELAND'},// アイスランド
    {picture: 'img/in.png', name: 'INDIA'},// インド　
    {picture: 'img/id.png', name: 'INDONESIA'},// インドネシア
    {picture: 'img/ir.png', name: 'IRAN'},// イラン
    {picture: 'img/iq.png', name: 'IRAQ'},// イラク
    {picture: 'img/ie.png', name: 'IRELAND'},// アイルランド
    {picture: 'img/il.png', name: 'ISRAEL'},// イスラエル
    {picture: 'img/it.png', name: 'ITALY'},// イタリア
    {picture: 'img/jm.png', name: 'JAMAICA'},// ジャマイカ
    {picture: 'img/jp.png', name: 'JAPAN'},// 日本
    {picture: 'img/jo.png', name: 'JORDAN'},// ヨルダン
    {picture: 'img/kz.png', name: 'KAZAKHSTAN'},// カザフスタン
    {picture: 'img/ke.png', name: 'KENYA'}, // ケニア
    {picture: 'img/ki.png', name: 'KIRIBATI'}, // キリバス
    {picture: 'img/kp.png', name: 'NORTH KOREA'},// 北朝鮮
    {picture: 'img/kr.png', name: 'SOUTH KOREA'},// 韓国
    {picture: 'img/kw.png', name: 'KUWAIT'},// クウェート
    {picture: 'img/kg.png', name: 'KYRGYZSTAN'}, // キルギス
    {picture: 'img/la.png', name: 'LAOS'}, // ラオス
    {picture: 'img/lv.png', name: 'LATVIA'},// ラトビア
    {picture: 'img/lb.png', name: 'LEBANON'},// レバノン
    {picture: 'img/ls.png', name: 'LESOTHO'},// レソト
    {picture: 'img/lr.png', name: 'LIBERIA'},// リベリア
    {picture: 'img/ly.png', name: 'LIBYA'},// リビア
    {picture: 'img/li.png', name: 'LIECHTENSTEIN'},// リヒテンシュタイン
    {picture: 'img/lt.png', name: 'LITHUANIA'},// リトアニア
    {picture: 'img/lu.png', name: 'LUXENBOURG'},// ルクセンブルク
    {picture: 'img/mg.png', name: 'MADAGASCAR'},// マダガスカル
    {picture: 'img/mw.png', name: 'MALAWI'},// マラウイ
    {picture: 'img/my.png', name: 'MALAYSIA'}, // マレーシア
    {picture: 'img/mv.png', name: 'MALDIVES'},// モルディブ
    {picture: 'img/ml.png', name: 'MALI'},// マリ
    {picture: 'img/mt.png', name: 'MALTA'},// マルタ
    {picture: 'img/mh.png', name: 'MARSHALL ISLANDS'},// マーシャル諸島
    {picture: 'img/mr.png', name: 'MAURITANIA'},// モーリタニア
    {picture: 'img/mu.png', name: 'MAURITIUS'},// モーリシャス
    {picture: 'img/mx.png', name: 'MEXICO'},// メキシコ
    {picture: 'img/fm.png', name: 'MICRONESIA'},// ミクロネシア 
    {picture: 'img/md.png', name: 'MOLDOVA'},// モルドバ
    {picture: 'img/mc.png', name: 'MONACO'},// モナコ
    {picture: 'img/mn.png', name: 'MONGOLIA'},// モンゴル
    {picture: 'img/me.png', name: 'MONTENEGRO'},// モンテネグロ
    {picture: 'img/ma.png', name: 'MOROCCO'},// モロッコ
    {picture: 'img/mz.png', name: 'MOZAMBIQUE'},// モザンビーク
    {picture: 'img/mm.png', name: 'MYANMAR'},// ミャンマー
    {picture: 'img/na.png', name: 'NAMIBIA'},// ナミビア
    {picture: 'img/nr.png', name: 'NAURU'},// ナウル
    {picture: 'img/np.png', name: 'NEPAL'},// ネパール
    {picture: 'img/nl.png', name: 'NETHERLANDS'},// オランダ
    {picture: 'img/nz.png', name: 'NEW ZEALAND'},// ニュージーランド
    {picture: 'img/ni.png', name: 'NICARAGUA'},// ニカラグア
    {picture: 'img/ne.png', name: 'NIGER'},// ニジェール
    {picture: 'img/ng.png', name: 'NIGERIA'},// ナイジェリア
    {picture: 'img/mk.png', name: 'NORTH MACEDONIA'},// 北マケドニア
    {picture: 'img/no.png', name: 'NORWAY'},// ノルウェー
    {picture: 'img/om.png', name: 'OMAN'},// オマーン
    {picture: 'img/pk.png', name: 'PAKISTAN'},// パキスタン
    {picture: 'img/pw.png', name: 'PALAU'},// パラオ
    {picture: 'img/pa.png', name: 'PANAMA'}, // パナマ
    {picture: 'img/pg.png', name: 'PAPUA NEW GUINEA'}, // パプアニューギニア
    {picture: 'img/py.png', name: 'PARAGUAY'},// パラグアイ
    {picture: 'img/pe.png', name: 'PERU'},// ペルー
    {picture: 'img/ph.png', name: 'PHILIPPINES'},// フィリピン
    {picture: 'img/pl.png', name: 'POLAND'},// ポーランド
    {picture: 'img/pt.png', name: 'PORTUGAL'},// ポルトガル
    {picture: 'img/qa.png', name: 'QATAR'},// カタール
    {picture: 'img/ro.png', name: 'ROMANIA'},// ルーマニア
    {picture: 'img/ru.png', name: 'RUSSIA'},// ロシア
    {picture: 'img/rw.png', name: 'RWANDA'},// ルワンダ
    {picture: 'img/kn.png', name: 'SAINT KITTS AND NEVIS'},// セントクリストファー・ネイビス
    {picture: 'img/lc.png', name: 'SAINT LUCIA'},// セントルシア
    {picture: 'img/vc.png', name: 'SAINT VINCENT AND THE GRENADINES'},// セントビンセント・グレナディーン
    {picture: 'img/ws.png', name: 'SAMOA'},// サモア
    {picture: 'img/sm.png', name: 'SAN MARINO'}, // サンマリノ
    {picture: 'img/st.png', name: 'SAO TOME AND PRINCIPE'},// サントメ・プリンシペ
    {picture: 'img/sa.png', name: 'SAUDI ARABIA'},// サウジアラビア
    {picture: 'img/sn.png', name: 'SENEGAL'},// セネガル
    {picture: 'img/rs.png', name: 'SERBIA'},// セルビア
    {picture: 'img/sc.png', name: 'SEYCHELLES'},// セーシェル
    {picture: 'img/sl.png', name: 'SIERRA LEONE'},// シエラレオネ
    {picture: 'img/sg.png', name: 'SINGAPORE'},// シンガポール
    {picture: 'img/sk.png', name: 'SLOVAKIA'},// スロバキア
    {picture: 'img/si.png', name: 'SLOVENIA'},// スロベニア
    {picture: 'img/sb.png', name: 'SOLOMON ISLANDS'},// ソロモン諸島
    {picture: 'img/so.png', name: 'SOMALIA'},// ソマリア
    {picture: 'img/za.png', name: 'SOUTH AFRICA'},// 南アフリカ
    {picture: 'img/ss.png', name: 'SOUTH SUDAN'},// 南スーダン
    {picture: 'img/es.png', name: 'SPAIN'},// スペイン
    {picture: 'img/lk.png', name: 'SRI LANKA'},// スリランカ
    {picture: 'img/sd.png', name: 'SUDAN'},// スーダン
    {picture: 'img/sr.png', name: 'SURINAME'},// スリナム
    {picture: 'img/se.png', name: 'SWEDEN'},// スウェーデン
    {picture: 'img/ch.png', name: 'SWITZERLAND'},// スイス
    {picture: 'img/sy.png', name: 'SYRIA'},// シリア
    {picture: 'img/tj.png', name: 'TAJIKISTAN'},// タジキスタン
    {picture: 'img/tz.png', name: 'TANZANIA'},// タンザニア
    {picture: 'img/th.png', name: 'THAILAND'},// タイ
    {picture: 'img/tl.png', name: 'TIMOR-LESTE'},// 東ティモール
    {picture: 'img/tg.png', name: 'TOGO'},// トーゴ
    {picture: 'img/to.png', name: 'TONGA'},// トンガ
    {picture: 'img/tt.png', name: 'TRINIDAD AND TOBAGO'},// トリニダード・トバゴ
    {picture: 'img/tn.png', name: 'TUNISIA'},// チュニジア
    {picture: 'img/tr.png', name: 'TURKEY'},// トルコ
    {picture: 'img/tm.png', name: 'TURKMENISTAN'},// トルクメニスタン
    {picture: 'img/tv.png', name: 'TUVALU'}, // ツバル
    {picture: 'img/ug.png', name: 'UGANDA'},// ウガンダ
    {picture: 'img/ua.png', name: 'UKRAINE'},// ウクライナ
    {picture: 'img/ae.png', name: 'UNITED ARAB EMIRATES'},// アラブ首長国連邦
    {picture: 'img/gb.png', name: 'UNITED KINGDOM'},// イギリス
    {picture: 'img/us.png', name: 'UNITED STATES'},// アメリカ
    {picture: 'img/uy.png', name: 'URUGUAY'},// ウルグアイ
    {picture: 'img/uz.png', name: 'UZBEKISTAN'},// ウズベキスタン
    {picture: 'img/vu.png', name: 'VANUATU'},// バヌアツ
    {picture: 'img/ve.png', name: 'VENEZUELA'},// ベネズエラ
    {picture: 'img/vn.png', name: 'VIETNAM'},// ベトナム
    {picture: 'img/ye.png', name: 'YEMEN'},// イエメン
    {picture: 'img/zm.png', name: 'ZAMBIA'},// ザンビア
    {picture: 'img/zw.png', name: 'ZIMBABWE'}// ジンバブエ   
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
               <p>Click the "START" button to start with the experiment。</p>
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
    <p>This is a practice session before the experiment。</p>
    <p>A fixation cross will appear on the screen, followed by a picture. To switch to the next item, click the "NEXT" button.</p>
    <p>You can blink your eyes only when the fixation cross is displayed. </p>     
    <p>Click the "START" button to start the experiment. </p>
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
    <p>This is the end of the Practice</p> 
    <p>Click "START" to begin the experiment.</p>
    </div>   
    `,
    choices: ['START'],
    post_trial_gap: 0,

};
main_timeline.push(practice_end);


// randomize list for studying, Change the number of items to adjust the final number of trials to use
var study_variables = jsPsych.randomization.sampleWithoutReplacement(variables,80);
console.log(study_variables); //show the item sample in console for debugging

// PART 1: Study.
var study_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px; color:beige">
    <div style='float: center;'><img src='img/un.png' width="320" height="240"></img>  
    <p>In this experiment, you will learn the flags of the member countries of UN</p>
    <p>The flag of each country will be displayed along with the name of the country.</p>
    <p>To proceed to the next item, click on the "NEXT" button. </p>
    <p>Remember to blink your eyes ONLY when the fixation cross is displayed. </p>  
    <p>Click "START" button to start</p>
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

 //rest after section is done 

// Old static rest trial 
 /*var rest = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div style="font-size:32px; color:beige">
    <p>You can take a short break now.</p>
    <p>When you are ready, click on "CONTINUE"</p>
    </div>`,
    choices: ['CONTINUE'],
    response_ends_trial: true,
    data: {
	    task: 'rest'
    }	  
};
main_timeline.push(rest);*/

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
    var wait_time = 5 * 60 * 1000; // in milliseconds
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


//PART 2. TEST
var test_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
    <div style="font-size:24px; color:beige">
    <div style='float: center;'><img src='img/un.png' width="320" height="240"></img> 
    <p>In this section, you will be asked to correctly remember the name of the country associated with the flag.</p>
    <p>Each flag will be displayed once, and you will have to write the name of the country on the box. </p>
    <p>If you are not sure about the name of the country, you can leave the box blank.</p>    
    <p>To move to the next item, click the "CONTINUE" button or hit the "ENTER" key.</p>
    <p>Click "START" button to start</p>
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
      <p>Which country is this flag from？</p>
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
    <p>This is the end of the experiment.</p>
    <p>Thank you very much for your paraticipation.</p>
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
