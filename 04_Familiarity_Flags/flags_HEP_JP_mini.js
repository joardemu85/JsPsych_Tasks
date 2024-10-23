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

main_timeline.push(preload_task);

//timeline variables

//Mini version
/*
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
];*/  

//Full version
var variables = [
  //STAND ALONE FORMAT 
  {picture: 'img/af.png', name: 'アフガニスタン'}, //AFGHANISTAN 
  {picture: 'img/al.png', name: 'アルバニア'}, //ALBANIA 
  {picture: 'img/dz.png', name: 'アルジェリア'}, //ALGERIA 
  {picture: 'img/ad.png', name: 'アンドラ'}, //ANDORRA 
  {picture: 'img/ao.png', name: 'アンゴラ'}, //ANGOLA 
  {picture: 'img/ag.png', name: 'アンティグア・バーブーダ'},//ANTIGUA AND BARBUDA 
  {picture: 'img/ar.png', name: 'アルゼンチン'}, //ARGENTINA 
  {picture: 'img/am.png', name: 'アルメニア'}, //ARMENIA 
  {picture: 'img/au.png', name: 'オーストラリア'}, //AUSTRALIA 
  {picture: 'img/at.png', name: 'オーストリア'}, //AUSTRIA 
  {picture: 'img/az.png', name: 'アゼルバイジャン'}, //AZERBAIJAN 
  {picture: 'img/bs.png', name: 'バハマ'}, //BAHAMAS 
  {picture: 'img/bh.png', name: 'バーレーン'}, //BAHARAIN 
  {picture: 'img/bd.png', name: 'バングラデシュ'}, //BANGLADESH 
  {picture: 'img/bb.png', name: 'バルバドス'},//BARBADOS 
  {picture: 'img/by.png', name: 'ベラルーシ'},//BELARUS 
  {picture: 'img/be.png', name: 'ベルギー'},//BELGIUM 
  {picture: 'img/bz.png', name: 'ベリーズ'},//BELIZE 
  {picture: 'img/bj.png', name: 'ベナン'}, //BENIN 
  {picture: 'img/bt.png', name: 'ブータン'}, //BHUTAN 
  {picture: 'img/bo.png', name: 'ボリビア'}, //BOLIVIA 
  {picture: 'img/ba.png', name: 'ボスニア・ヘルツェゴビナ'},//BOSNIA AND HERZEGOVINA 
  {picture: 'img/bw.png', name: 'ボツワナ'}, //BOTSWANA 
  {picture: 'img/br.png', name: 'ブラジル'},//BRAZIL 
  {picture: 'img/bn.png', name: 'ブルネイ'}, //BRUNEI 
  {picture: 'img/bg.png', name: 'ブルガリア'}, //BULGARIA 
  {picture: 'img/bf.png', name: 'ブルキナファソ'}, //BURKINA FASO 
  {picture: 'img/bi.png', name: 'ブルンジ'}, //BURUNDI 
  {picture: 'img/kh.png', name: 'カンボジア'}, //CAMBODIA 
  {picture: 'img/cm.png', name: 'カメルーン'}, //CAMEROON 
  {picture: 'img/ca.png', name: 'カナダ'}, //CANADA 
  {picture: 'img/cv.png', name: 'カーボベルデ'}, //CAPE VERDE  
  {picture: 'img/cf.png', name: '中央アフリカ'},//CENTRAL AFRICAN REPUBLIC  
  {picture: 'img/td.png', name: 'チャド'}, //CHAD 
  {picture: 'img/cl.png', name: 'チリ'}, //CHILE 
  {picture: 'img/cn.png', name: '中国'}, //CHINA 
  {picture: 'img/co.png', name: 'コロンビア'}, //COLOMBIA 
  {picture: 'img/km.png', name: 'コモロ'}, //COMOROS 
  {picture: 'img/cg.png', name: 'コンゴ'}, //REPUBLIC OF THE CONGO 
  {picture: 'img/cd.png', name: 'コンゴ民主共和国'},//DR CONGO 
  {picture: 'img/cr.png', name: 'コスタリカ'}, //COSTA RICA 
  {picture: 'img/ci.png', name: 'コートジボワール'}, //IVORY COAST 
  {picture: 'img/hr.png', name: 'クロアチア'}, //CROATIA 
  {picture: 'img/cu.png', name: 'キューバ'},//CUBA 
  {picture: 'img/cy.png', name: 'キプロス'},//CYPRUS 
  {picture: 'img/cz.png', name: 'チェコ'},//CZECHIA 
  {picture: 'img/dk.png', name: 'デンマーク'}, //DENMARK 
  {picture: 'img/dj.png', name: 'ジブチ'}, //DJIBOUTI
  {picture: 'img/dm.png', name: 'ドミニカ国'}, //DOMINICA
  {picture: 'img/do.png', name: 'ドミニカ共和国'}, //DOMINICAN REPUBLIC
  {picture: 'img/ec.png', name: 'エクアドル'}, //ECUADOR 
  {picture: 'img/eg.png', name: 'エジプト'}, //EGYPT 
  {picture: 'img/sv.png', name: 'エルサルバドル'}, //EL SALVADOR
  {picture: 'img/gq.png', name: '赤道ギニア'}, //EQUATORIAL GUINEA 
  {picture: 'img/er.png', name: 'エリトリア'}, //ERITREA 
  {picture: 'img/ee.png', name: 'エストニア'}, //ESTONIA
  {picture: 'img/sz.png', name: 'エスワティニ'}, //ESWATINI 
  {picture: 'img/et.png', name: 'エチオピア'}, //ETHIOPIA 
  {picture: 'img/fj.png', name: 'フィジー'},//FIJI 
  {picture: 'img/fi.png', name: 'フィンランド'},//FINLAND 
  {picture: 'img/fr.png', name: 'フランス'},//FRANCE 
  {picture: 'img/ga.png', name: 'ガボン'},//GABON  
  {picture: 'img/gm.png', name: 'ガンビア'},//GAMBIA 
  {picture: 'img/ge.png', name: 'ジョージア'},//GEORGIA 
  {picture: 'img/de.png', name: 'ドイツ'}, //GERMANY
  {picture: 'img/gh.png', name: 'ガーナ'}, //GHANA 
  {picture: 'img/gr.png', name: 'ギリシャ'},//GREECE 
  {picture: 'img/gd.png', name: 'グレナダ'}, //GRENADA 
  {picture: 'img/gt.png', name: 'グアテマラ'}, //GUATEMALA 
  {picture: 'img/gn.png', name: 'ギニア'},//GUINEA 
  {picture: 'img/gw.png', name: 'ギニアビサウ'},//GUINEA-BISSAU 
  {picture: 'img/gy.png', name: 'ガイアナ'},//GUYANA 
  {picture: 'img/ht.png', name: 'ハイチ'},//HAITI 
  {picture: 'img/hn.png', name: 'ホンジュラス'},//HONDURAS 
  {picture: 'img/hu.png', name: 'ハンガリー'},//HUNGARY 
  {picture: 'img/is.png', name: 'アイスランド'},//ICELAND 
  {picture: 'img/in.png', name: 'インド'},//INDIA 　
  {picture: 'img/id.png', name: 'インドネシア'},//INDONESIA 
  {picture: 'img/ir.png', name: 'イラン'},//IRAN 
  {picture: 'img/iq.png', name: 'イラク'},//IRAQ 
  {picture: 'img/ie.png', name: 'アイルランド'},//IRELAND 
  {picture: 'img/il.png', name: 'イスラエル'},//ISRAEL 
  {picture: 'img/it.png', name: 'イタリア'},//ITALY 
  {picture: 'img/jm.png', name: 'ジャマイカ'},//JAMAICA 
  {picture: 'img/jp.png', name: '日本'},//JAPAN 
  {picture: 'img/jo.png', name: 'ヨルダン'},//JORDAN 
  {picture: 'img/kz.png', name: 'カザフスタン'},//KAZAKHSTAN 
  {picture: 'img/ke.png', name: 'ケニア'}, //KENYA 
  {picture: 'img/ki.png', name: 'キリバス'}, //KIRIBATI 
  {picture: 'img/kp.png', name: '北朝鮮'},//NORTH KOREA 
  {picture: 'img/kr.png', name: '韓国'},//SOUTH KOREA 
  {picture: 'img/kw.png', name: 'クウェート'},//KUWAIT 
  {picture: 'img/kg.png', name: 'キルギス'}, //KYRGYZSTAN 
  {picture: 'img/la.png', name: 'ラオス'}, //LAOS 
  {picture: 'img/lv.png', name: 'ラトビア'},//LATVIA 
  {picture: 'img/lb.png', name: 'レバノン'},//LEBANON 
  {picture: 'img/ls.png', name: 'レソト'},//LESOTHO 
  {picture: 'img/lr.png', name: 'リベリア'},//LIBERIA 
  {picture: 'img/ly.png', name: 'リビア'},//LIBYA 
  {picture: 'img/li.png', name: 'リヒテンシュタイン'},//LIECHTENSTEIN 
  {picture: 'img/lt.png', name: 'リトアニア'},//LITHUANIA 
  {picture: 'img/lu.png', name: 'ルクセンブルク'},//LUXENBOURG 
  {picture: 'img/mg.png', name: 'マダガスカル'},//MADAGASCAR 
  {picture: 'img/mw.png', name: 'マラウイ'},//MALAWI 
  {picture: 'img/my.png', name: 'マレーシア'}, //MALAYSIA 
  {picture: 'img/mv.png', name: 'モルディブ'},//MALDIVES 
  {picture: 'img/ml.png', name: 'マリ'},//MALI 
  {picture: 'img/mt.png', name: 'マルタ'},//MALTA 
  {picture: 'img/mh.png', name: 'マーシャル諸島'},//MARSHALL ISLANDS 
  {picture: 'img/mr.png', name: 'モーリタニア'},//MAURITANIA 
  {picture: 'img/mu.png', name: 'モーリシャス'},//MAURITIUS 
  {picture: 'img/mx.png', name: 'メキシコ'},//MEXICO 
  {picture: 'img/fm.png', name: 'ミクロネシア'},//MICRONESIA  
  {picture: 'img/md.png', name: 'モルドバ'},//MOLDOVA 
  {picture: 'img/mc.png', name: 'モナコ'},//MONACO 
  {picture: 'img/mn.png', name: 'モンゴル'},//MONGOLIA 
  {picture: 'img/me.png', name: 'モンテネグロ'},//MONTENEGRO 
  {picture: 'img/ma.png', name: 'モロッコ'},//MOROCCO 
  {picture: 'img/mz.png', name: 'モザンビーク'},//MOZAMBIQUE 
  {picture: 'img/mm.png', name: 'ミャンマー'},//MYANMAR 
  {picture: 'img/na.png', name: 'ナミビア'},//NAMIBIA 
  {picture: 'img/nr.png', name: 'ナウル'},//NAURU 
  {picture: 'img/np.png', name: 'ネパール'},//NEPAL 
  {picture: 'img/nl.png', name: 'オランダ'},//NETHERLANDS 
  {picture: 'img/nz.png', name: 'ニュージーランド'},//NEW ZEALAND 
  {picture: 'img/ni.png', name: 'ニカラグア'},//NICARAGUA 
  {picture: 'img/ne.png', name: 'ニジェール'},//NIGER 
  {picture: 'img/ng.png', name: 'ナイジェリア'},//NIGERIA 
  {picture: 'img/mk.png', name: '北マケドニア'},//NORTH MACEDONIA 
  {picture: 'img/no.png', name: 'ノルウェー'},//NORWAY 
  {picture: 'img/om.png', name: 'オマーン'},//OMAN 
  {picture: 'img/pk.png', name: 'パキスタン'},//PAKISTAN 
  {picture: 'img/pw.png', name: 'パラオ'},//PALAU 
  {picture: 'img/pa.png', name: 'パナマ'}, //PANAMA 
  {picture: 'img/pg.png', name: 'パプアニューギニア'}, //PAPUA NEW GUINEA 
  {picture: 'img/py.png', name: 'パラグアイ'},//PARAGUAY 
  {picture: 'img/pe.png', name: 'ペルー'},//PERU 
  {picture: 'img/ph.png', name: 'フィリピン'},//PHILIPINES 
  {picture: 'img/pl.png', name: 'ポーランド'},//POLAND 
  {picture: 'img/pt.png', name: 'ポルトガル'},//PORTUGAL 
  {picture: 'img/qa.png', name: 'カタール'},//QATAR 
  {picture: 'img/ro.png', name: 'ルーマニア'},//ROMANIA 
  {picture: 'img/ru.png', name: 'ロシア'},//RUSSIA 
  {picture: 'img/rw.png', name: 'ルワンダ'},//RWANDA 
  {picture: 'img/kn.png', name: 'セントクリストファー・ネイビス'},//SAINT KITTS AND NEVIS 
  {picture: 'img/lc.png', name: 'セントルシア'},//SAINT LUCIA 
  {picture: 'img/vc.png', name: 'セントビンセント・グレナディーン'},//SAINT VINCENT AND THE GRENADINES 
  {picture: 'img/ws.png', name: 'サモア'},//SAMOA 
  {picture: 'img/sm.png', name: 'サンマリノ'}, //SAN MARINO 
  {picture: 'img/st.png', name: 'サントメ・プリンシペ'},//SAO TOME AND PRINCIPE 
  {picture: 'img/sa.png', name: 'サウジアラビア'},//SAUDI ARABIA 
  {picture: 'img/sn.png', name: 'セネガル'},//SENEGAL 
  {picture: 'img/rs.png', name: 'セルビア'},//SERBIA 
  {picture: 'img/sc.png', name: 'セーシェル'},//SEYCHELLES 
  {picture: 'img/sl.png', name: 'シエラレオネ'},//SIERRA LEONE 
  {picture: 'img/sg.png', name: 'シンガポール'},//SINGAPORE 
  {picture: 'img/sk.png', name: 'スロバキア'},//SLOVAKIA 
  {picture: 'img/si.png', name: 'スロベニア'},//SLOVENIA 
  {picture: 'img/sb.png', name: 'ソロモン諸島'},//SOLOMON ISLANDS 
  {picture: 'img/so.png', name: 'ソマリア'},//SOMALIA 
  {picture: 'img/za.png', name: '南アフリカ'},//SOUTH AFRICA 
  {picture: 'img/ss.png', name: '南スーダン'},//SOUTH SUDAN 
  {picture: 'img/es.png', name: 'スペイン'},//SPAIN 
  {picture: 'img/lk.png', name: 'スリランカ'},//SRI LANKA 
  {picture: 'img/sd.png', name: 'スーダン'},//SUDAN 
  {picture: 'img/sr.png', name: 'スリナム'},//SURINAME 
  {picture: 'img/se.png', name: 'スウェーデン'},//SWEEDEN 
  {picture: 'img/ch.png', name: 'スイス'},//SWITZERLAND 
  {picture: 'img/sy.png', name: 'シリア'},//SYRIA 
  {picture: 'img/tj.png', name: 'タジキスタン'},//TAJIKISTAN 
  {picture: 'img/tz.png', name: 'タンザニア'},//TANZANIA 
  {picture: 'img/th.png', name: 'タイ'},//THAILAND 
  {picture: 'img/tl.png', name: '東ティモール'},//TIMOR-LESTE 
  {picture: 'img/tg.png', name: 'トーゴ'},//TOGO 
  {picture: 'img/to.png', name: 'トンガ'},//TONGA 
  {picture: 'img/tt.png', name: 'トリニダード・トバゴ'},//TRINIDAD AND TOBAGO 
  {picture: 'img/tn.png', name: 'チュニジア'},//TUNISIA 
  {picture: 'img/tr.png', name: 'トルコ'},//TURKEY 
  {picture: 'img/tm.png', name: 'トルクメニスタン'},//TURKMENISTAN 
  {picture: 'img/tv.png', name: 'ツバル'}, //TUVALU 
  {picture: 'img/ug.png', name: 'ウガンダ'},//UGANDA 
  {picture: 'img/ua.png', name: 'ウクライナ'},//UKRAINE 
  {picture: 'img/ae.png', name: 'アラブ首長国連邦'},//UNITED ARAB EMIRATES 
  {picture: 'img/gb.png', name: 'イギリス'},//UNITED KINGDOM 
  {picture: 'img/us.png', name: 'アメリカ'},//UNITED STATES 
  {picture: 'img/uy.png', name: 'ウルグアイ'},//URUGUAY 
  {picture: 'img/uz.png', name: 'ウズベキスタン'},//UZBEKISTAN 
  {picture: 'img/vu.png', name: 'バヌアツ'},//VANUATU 
  {picture: 'img/ve.png', name: 'ベネズエラ'},//VENEZUELA 
  {picture: 'img/vn.png', name: 'ベトナム'},//VIETNAM 
  {picture: 'img/ye.png', name: 'イエメン'},//YEMEN 
  {picture: 'img/zm.png', name: 'ザンビア'},//ZAMBIA 
  {picture: 'img/zw.png', name: 'ジンバブエ'}//ZIMBABWE    
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
var sample_size = 70;  // Use 100 items for the task, 20 for debugging
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
    var wait_time = 500; // in milliseconds
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
    var wait_time = 2 *60 * 1000; // in milliseconds (5 minutes)
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
    var wait_time = 3 * 60 * 1000; // in milliseconds
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
    var wait_time = 5 * 60 * 1000; // in milliseconds (10 minutes)
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
    <p>それぞれの国旗が1回ずつ表示され、正しい国名をボックスに入力ることになります。</p>
    <p>正しい国名を覚えていない場合は、空欄のままで構いません。</p>
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
  data: {
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
