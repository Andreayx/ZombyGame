$(".buttonTwo").hide();
time = 0

// Suoni
var sfondoSuono = new Audio("sounds/sfondoSuono.mp3");
var zombi = new Audio("sounds/zombi.mp3");
var door = new Audio("sounds/door.mp3")
var scream = new Audio("sounds/scream.mp3")
var brain = new Audio("sounds/brain.mp3")
var run = new Audio("sounds/run.mp3")
var book = new Audio("sounds/book.mp3")
var radio = new Audio("sounds/radio.mp3")
var vittoria = new Audio("sounds/vittoria.mp3")


$(".buttonOne").click(function(){
  switch (time) {
  case 0:
    $(".buttonTwo").show();
    $("#mainTitle").text("Sei in casa nel cuore della notte");

    $("#textGame").text(`Sei a casa, immerso nel silenzio della notte. Il crepuscolo ha tinto il mondo di grigio e la quiete sembra opprimente. Improvvisamente, il silenzio viene infranto da rumori inquietanti provenienti dall'esterno – un suono sordo, quasi come il graffiare di artigli su metallo. Il tuo cuore accelera, e ogni minimo rumore sembra amplificato. La tua mente corre: chi può essere a quest'ora? Sono i venti che giocano brutti scherzi, o c'è qualcosa di più sinistro?

    Senti il rumore di un colpo secco contro la porta d'ingresso, seguito da un sussurro flebile. È come se qualcosa stesse cercando di entrare, ma non riesci a distinguere se il suono proviene da un essere umano o da qualcosa di più oscuro.`);

    $(".buttonOne").text("Esci di Casa a Controllare");
    $(".buttonTwo").text("Chiami la Polizia");

    sfondoSuono.play();

    time++;


    break;
  case 1:
    $("#mainTitle").text("Sei fuori casa a controllare");

    $("#textGame").text(`Hai deciso di uscire di casa per controllare cosa sta succedendo. L'oscurità avvolge il quartiere mentre ti avventuri fuori, il rumore persistente sembra ora più vicino, come se qualcuno stesse cercando di avvicinarsi. Ogni passo che fai è accompagnato da un rumore di foglie secche che scricchiolano sotto i piedi. Ti fermi per un attimo, il cuore che batte all'impazzata, e cerchi di capire da dove provenga il rumore.

    D’improvviso, senti un grido agghiacciante provenire da un vicolo vicino. Un brivido corre lungo la tua schiena mentre il suono di passi affrettati si avvicina. Le ombre sembrano muoversi in modo inquietante, e non puoi fare a meno di chiederti se sia il momento di tornare indietro o se dovresti investigare ulteriormente.`);

  $(".buttonOne").text("Segui il grido nel vincolo");
  $(".buttonTwo").text("Torna rapidamente in casa e chiudi la porta");

  sfondoSuono.pause();
  scream.play();
  sfondoSuono.play();

    time++;
    break;
  case 2:
      $("#mainTitle").text("Hai seguito il grido nel vincolo");

      $("#textGame").text(`Hai deciso di seguire il grido, sperando di scoprire cosa o chi possa aver bisogno di aiuto. Entrando nel vicolo, l'oscurità sembra avvolgerti come una coperta umida e gelida. I tuoi passi risuonano nel silenzio, mentre il grido, ora un lamento distante, si fa più debole e incerto.

        Il vicolo è stretto e costellato di rifiuti, le pareti di mattoni umidi sembrano stringersi intorno a te. Ogni ombra proiettata dalle tue luci flash sembrano muoversi come se avessero vita propria. La paura si fa palpabile mentre ti avvicini a una figura rannicchiata in un angolo oscuro.

        Quando raggiungi il luogo del grido, scopri una figura piegata su se stessa, con il volto nascosto. Mentre ti avvicini con cautela, il lamento si trasforma in un sussurro tremante. Senti un brivido gelido scorrerti lungo la schiena mentre la figura lentamente solleva la testa.

        I tuoi occhi si incontrano con quelli vuoti e senza vita della figura. Non è un essere umano. È un'entità pallida e deformata, con occhi scuri che sembrano scrutare direttamente nella tua anima. La bocca si apre in un ghigno malvagio mentre una voce spettrale sussurra: “Non dovevi venire qui…”`);

      $(".buttonOne").text("Affronta l'entità e chiedi chi è");
      $(".buttonTwo").text("Scappa immediatamente dal vincolo");

      scream.pause();
      sfondoSuono.pause();
      brain.play();
      time++;


    break;
  case 3:
      $("#mainTitle").text("Sei Morto");

      $("#textGame").text(`Decidi di affrontare l'entità e chiedere chi è. Con il cuore che batte forte e la mente in preda al panico, ti avvicini all'ombra minacciosa e chiedi con voce tremante, "Chi sei?"

        L'entità si avvicina lentamente, rivelando un volto distorto e orribile, con occhi profondi e affamati di malevolenza. Senza rispondere, si scaglia verso di te con una velocità spaventosa. Le sue fauci spalancate e i denti aguzzi sono pronti a divorarti.

        Non hai tempo di reagire. L'entità ti afferra con artigli gelidi e ti trascina verso di sé. La tua pelle viene strappata e il dolore è insopportabile mentre le fauci dell'entità si chiudono su di te. La carne viene squarciata e i tuoi sussulti di terrore sono soffocati mentre l'entità inizia a mangiarti.

        La tua visione si fa sempre più oscura mentre l'orrore ti consuma. L'oscurità avvolge tutto, e sei completamente sopraffatto dalla creatura malevola.... RICARICA LA PAGINA PER RIPROVARE`);

      $(".buttonOne").hide();
      $(".buttonTwo").hide();

      sfondoSuono.pause();
      scream.pause();
      brain.pause();

      zombi.play();

      time++;
      break;
  case 4:
        $("#mainTitle").text("Sei Morto");

        $("#textGame").text(`Decidi di cercare un'arma nascosta nell'auto. Ti precipiti verso il veicolo, forzando l'apertura del bagagliaio e rovistando freneticamente all'interno. Dopo pochi istanti, le tue mani afferrano un'arma da fuoco nascosta sotto un tappetino.

          Con un misto di speranza e ansia, prendi l'arma e la carichi rapidamente. Le urla degli zombi si avvicinano sempre più, e senti il loro pesante respiro e i colpi alla carrozzeria dell'auto. Prepari l'arma, pronto a difenderti.

          All’improvviso, gli zombi rompono il vetro dell'auto e cominciano a infiltrarsi all'interno. Ti ritrovi circondato e incapace di mantenere la calma. Nonostante il tuo tentativo di usare l'arma, il caos è totale e gli zombi ti sovrastano con la loro forza implacabile.

          Le loro mani gelide e affamate ti afferrano e ti tirano verso di loro. L'arma che avevi trovato è inutile contro il numero schiacciante di nemici. Viene sopraffatto e brutalmente divorato dagli zombi, mentre il tuo ultimo tentativo di salvezza si trasforma in una lotta disperata e sanguinosa.... RICARICA LA PAGINA PER RIPROVARE`);

        $(".buttonOne").hide();
        $(".buttonTwo").hide();

        sfondoSuono.pause();
        run.pause();

        zombi.play();

        time++;
      break;
  case 5:
      $("#mainTitle").text("Sei Sopravvissuto, Hai Vinto!");

      $("#textGame").text(`Decidi di seguire il cerchio rosso verso l'aeroporto militare. Nonostante l'oscurità e i rumori sinistri degli zombi che si avvicinano, acceleri verso l'aeroporto con tutta la forza rimasta. Il caos e la paura si intensificano, ma l'immagine della portaerei ti guida attraverso la notte.

            Arrivi all'aeroporto e trovi un'opera frenetica di evacuazione. L'esercito, in pieno controllo della situazione, sta caricando civili sulla grande portaerei ancorata al largo. I soldati ti accolgono e ti guidano rapidamente verso l'imbarco.

            Sali a bordo della portaerei mentre il rumore della città si dissolve all'orizzonte. La portaerei salpa verso un luogo sicuro, e il senso di sollievo ti avvolge mentre il pericolo degli zombi rimane indietro. Sei ormai lontano dal caos e pronto per essere trasferito in una zona sicura in Islanda... HAI VINTO! RICARICA LA PAGINA PER RIGIOCARE!`);

      $(".buttonOne").hide();
      $(".buttonTwo").hide();


      $(".home").css("background-image", 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("img/VittoriaGame.jpg")');


      brain.pause();
      sfondoSuono.pause();
      run.pause();
      book.pause();

      vittoria.play();
      radio.play();

      time++;
      break;
  default:
    alert("Si è verificato un problema :(");
}
});
$(".buttonTwo").click(function(){

  switch (time) {
  case 1:
  $("#mainTitle").text("Sei Morto");

  $("#textGame").text(`Decidi di chiamare la polizia, ma mentre stai per estrarre il telefono, un terrore inaspettato ti travolge. Le ombre si materializzano in figure grottesche: gli zombi. Hanno già sfondato la tua casa e ora si avvicinano, affamati e rabbiosi. La porta della tua abitazione cede sotto il loro peso, e ti accorgi troppo tardi che il tuo rifugio è ormai un'imboscata.

  La tua ultima disperazione è vana. Gli zombi ti circondano e, in un crescendo di agonia, ti avvolgono con le loro mani gelide e affamate. I tuoi ultimi sforzi per fuggire sono vani mentre ti trascinano verso il buio eterno. La bocca di uno di loro si avvicina lentamente al tuo corpo e il dolore si trasforma in una consumante oscurità... RICARICA LA PAGINA PER RIPROVARE`);

  $(".buttonOne").hide();
  $(".buttonTwo").hide();

  sfondoSuono.pause();

  zombi.play();

  time++;

    break;
  case 2:
    $("#mainTitle").text("Sei Morto");

    $("#textGame").text(`Decidi di tornare rapidamente in casa e chiudere la porta. Corri verso l'ingresso e riesci a richiuderlo giusto in tempo, con il cuore che batte forte per la paura.

    Mentre ti rifugi all'interno, i rumori fuori continuano e diventano sempre più intensi. Gli zombi, infuriati e famelici, cercano di sfondare la porta. Nonostante i tuoi tentativi di barricarti, il legno cede sotto la loro forza.

    Gli zombi irrompono nella tua casa e ti circondano. La tua resistenza è inutile contro la massa di mostri che si avventano su di te. Vieni sopraffatto e divorato, la tua ultima azione non ha evitato il destino inevitabile... RICARICA LA PAGINA PER RIPROVARE`);

    $(".buttonOne").hide();
    $(".buttonTwo").hide();

    sfondoSuono.pause();

    door.play();
    zombi.play();

    time++;


    break;
  case 3:

  $("#mainTitle").text("Hai Trovato una Macchina");

  $("#textGame").text(`Il terrore ti spinge a scappare dal vicolo, i passi frenetici e pesanti mentre le ombre sembrano allungarsi per afferrarti. Il ghigno spettrale della figura ti accompagna nei tuoi incubi mentre corri a perdifiato verso la strada principale. L’oscurità e il panico ti accecano, ma il pensiero di trovare rifugio ti spinge avanti.

      Sfrecci fuori dal vicolo, il freddo della notte ti colpisce come una scossa mentre il tuo respiro si condensa nell'aria gelida. Quando finalmente riesci a fermarti e a girarti, ti accorgi che il vicolo è avvolto in un silenzio inquietante. Hai perso di vista la figura, ma non la sensazione di essere seguito.

      Proprio allora, noti una vecchia auto abbandonata lungo il marciapiede. L’auto sembra in condizioni disastrose, ma potrebbe essere l'unica via di salvezza. La porta è leggermente aperta e l'interno è coperto di polvere e rifiuti. Decidi di dare un'occhiata, sperando di trovare qualcosa di utile.`);

  $(".buttonOne").text("Trova un arma nella Macchina");
  $(".buttonTwo").text("Trova una mappa e dei viveri");


  scream.pause();
  sfondoSuono.pause();
  brain.pause();
  run.play();
  sfondoSuono.play();

  time++;


    break;
  case 4:
        $("#mainTitle").text("Hai trovato delle indicazioni su una mappa");

        $("#textGame").text(`Mentre frughi nell’auto abbandonata, trovi una mappa della città e una borsa di viveri. La mappa, sebbene sgualcita e sporca, mostra due indicatori principali che attirano la tua attenzione. Un cerchio rosso è tracciato vicino all’aeroporto militare, mentre una freccia blu segna una strada che attraversa il centro della città. Non sei sicuro di cosa significhino queste indicazioni, ma la mappa potrebbe fornire un indizio cruciale per la tua sopravvivenza.

              Il tempo non è dalla tua parte. I rumori inquietanti che avevi sentito nel vicolo si avvicinano sempre di più, e una sensazione crescente di paura ti assale. Un'orda di zombi sembra muoversi verso la tua posizione, e devi decidere rapidamente quale strada prendere.`);

        $(".buttonOne").text("Vai al cerchio rosso");
        $(".buttonTwo").text("Vai alla freccia blu");


        brain.pause();
        sfondoSuono.pause();
        run.pause();
        book.play();

        time++;

      break;
  case 5:
        $("#mainTitle").text("Sei Morto");

        $("#textGame").text(`Decidi di seguire la freccia blu che attraversa la città. Sperando di trovare una via di fuga o un rifugio, ti addentri nelle strade deserte e labirintiche. La freccia ti guida attraverso angoli oscuri e strade secondarie, e i rumori degli zombi diventano sempre più vicini.

          Mentre prosegui, la tua speranza di trovare sicurezza svanisce rapidamente. Le strade che attraversi sono piene di macerie e segnali di caos. I rumori degli zombi si avvicinano, e l'oscurità cresce sempre di più.

          Senza preavviso, un gruppo di zombi appare all'uscita di una strada. Non hai il tempo di reagire e sei completamente accerchiato. Nonostante i tuoi tentativi disperati di scappare, gli zombi ti circondano e ti sopraffanno.

          Le loro mani affamate e i loro morsi ti trascinano verso una fine orribile e violenta. Il tuo tentativo di seguire la freccia blu si rivela fatale mentre vieni brutalmente divorato... RICARICA LA PAGINA PER RIPROVARE`);

        $(".buttonOne").hide();
        $(".buttonTwo").hide();

        sfondoSuono.pause();
        book.pause();
        run.pause();
        brain.pause();

        zombi.play();

  time++;
      break;
  default:
    alert("Si è verificato un problema :(");
}

});
