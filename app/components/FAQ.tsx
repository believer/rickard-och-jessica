const questions = [
  {
    title: 'Vill ni ha presenter?',
    answer: (
      <>
        <p>
          Vi vill träffa er och ha en trevlig kväll tillsammans! Vi har därför
          valt att inte ha några presenter.
        </p>
        <p>
          Om ni ändå vill ge oss något så kan ni göra det genom att skänka till
          en framtida bröllopsresa. Ni kan göra det genom att swisha till{' '}
          <a
            className="underline decoration-dashed decoration-pink-600 text-pink-600"
            href="#contact"
          >
            brudparet
          </a>{' '}
          eller genom att betala in på 9273-257 851 7 (ICA Banken).{' '}
          <span className="text-red-500">♥</span>
        </p>
      </>
    ),
  },
  {
    title: 'Kan jag ta med barn?',
    answer: (
      <>
        <p>
          Vi vill att ni ska få njuta av festen utan att behöva tänka på barnen.
          Så vi tror att de kommer ha roligare med sina barnvakter.
        </p>
        <p className="font-medium">
          För de riktigt små barnen, så går det såklart jättebra att vara med!
        </p>
        <p>
          Vi kommer ha med våra barn under ceremonin, men under festen får de
          hänga med barnvakt.
        </p>
      </>
    ),
  },
  {
    title: 'Hur tar man sig ut/hem?',
    answer: (
      <>
        <p>
          Vi har hyrt en partybuss ut och tillbaka. Den kommer gå utanför
          Salk-hallen i Alvik (på Gustavslundsvägen i höjd med ICA-butiken).
          Bussen <strong className="font-semibold">går 14:30</strong> så var där
          vid 14:15 eftersom det inte kommer finnas någon som räknar in vilka
          som är med.
        </p>
        <p>
          Om ni har ändrat er och inte vill åka med så är det helt okej. Samma
          om ni har ändrat er och{' '}
          <strong className="font-semibold">vill</strong> åka med så ska det
          också gå bra.
        </p>
        <p className="font-medium">
          Samma buss rullar hem från Rosenhill till Alvik vid 01:00.
        </p>
        <hr className="!my-4" />
        <p>
          Det finns en stor parkering vid Rosenhill för de som vill köra bil.
        </p>
        <hr className="!my-4" />
        <p>
          Annars är närmsta busshållplatsen för Rosenhill{' '}
          <strong className="font-semibold">Nyckelby (Ekerö)</strong> vid
          korsningen med ICA-butiken – som är 800 meter från Rosenhill. Vilket
          är ungefär 10 – 15 minuter med någorlunda raska steg.
        </p>
        <p>
          Bussen till Nyckelby går från Brommaplan. Antingen direktbuss 311, 312
          eller 309 (långsammare) eller med bussbyte från annan buss (kolla{' '}
          <a
            href="https://sl.se/"
            className="underline decoration-dashed decoration-pink-600 text-pink-600"
          >
            sl.se
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    title: 'Rekommenderat boende',
    answer: (
      <p>
        Det finns ingen möjlighet att bo kvar på plats. Om man vill bo på hotell
        efter så rekommenderar vi{' '}
        <a
          href="https://www.scandichotels.se/hotell/sverige/stockholm/scandic-alvik"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dashed decoration-pink-600 text-pink-600"
        >
          Scandic Alvik
        </a>
      </p>
    ),
  },
  {
    title: 'Ta kort under vigseln',
    answer: (
      <p>
        Vi vill att ni ska kunna njuta fullt av ceremonin så skippa gärna
        mobiler och kameror under vigseln. En professionell fotograf är på
        plats, så det kommer finnas gott om bilder efter.
      </p>
    ),
  },
  {
    title: 'Vad ska vi dansa till för musik',
    answer: (
      <p>
        Vi har skapat en{' '}
        <a
          href="https://open.spotify.com/playlist/2PClxNyk3NsOufQFMRTOZX?si=tJ-PECsDQz-94nhI_15Olw&pt=7c7c53d1916cf6c36d0675df2eda5eea"
          className="underline decoration-dashed decoration-pink-600 text-pink-600"
        >
          delad lista i Spotify
        </a>{' '}
        där ni kan lägga in låtar. Hjälp oss skapa den ultimata partylistan! Om
        du inte kommer åt den,{' '}
        <a
          href="#contact"
          className="underline decoration-dashed decoration-pink-600 text-pink-600"
        >
          hör av dig.
        </a>
      </p>
    ),
  },
]

export function FAQ() {
  return (
    <>
      <h2 className="text-4xl font-cursive mt-8 md:mt-12">FAQ</h2>
      <div className="space-y-4 mt-8">
        {questions.map((question) => (
          <details key={question.title}>
            <summary className="cursor-pointer font-semibold focus:outline-none ring-2 rounded ring-offset-2 ring-offset-white ring-white transition-all focus:ring-pink-400">
              {question.title}
            </summary>
            <div className="p-4 bg-slate-50 border border-slate-300 rounded mt-2 space-y-2">
              {question.answer}
            </div>
          </details>
        ))}
      </div>
    </>
  )
}
