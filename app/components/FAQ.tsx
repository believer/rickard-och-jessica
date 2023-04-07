export function FAQ() {
  return (
    <>
      <h2 className="text-4xl font-cursive mt-8 md:mt-12">FAQ</h2>
      <div className="space-y-4">
        <details className="mt-4">
          <summary className="cursor-pointer font-semibold focus:outline-none ring-2 rounded ring-offset-2 ring-offset-white ring-white transition-all focus:ring-pink-400">
            Vill ni ha presenter?
          </summary>
          <div className="p-4 bg-slate-50 border border-slate-300 rounded mt-2 space-y-2">
            <p>
              Vi vill träffa er och ha en trevlig kväll tillsammans! Vi har
              därför valt att inte ha några presenter.
            </p>
            <p>
              Om ni ändå vill ge oss något så kan ni göra det genom att skänka
              till en framtida bröllopsresa. Ni kan göra det genom att swisha
              till{" "}
              <a
                className="underline decoration-dashed decoration-pink-600 text-pink-600"
                href="#contact"
              >
                brudparet
              </a>{" "}
              eller genom att betala in på 9273-257 851 7 (ICA Banken).{" "}
              <span className="text-red-500">♥</span>
            </p>
          </div>
        </details>
        <details>
          <summary className="cursor-pointer font-semibold focus:outline-none ring-2 rounded ring-offset-2 ring-offset-white ring-white transition-all focus:ring-pink-400">
            Kan jag ta med barn?
          </summary>
          <div className="p-4 bg-slate-50 border border-slate-300 rounded mt-2 space-y-2">
            <p>
              Vi vill att ni ska få njuta av festen utan att behöva tänka på
              barnen. Så vi tror att de kommer ha roligare med sina barnvakter.
            </p>
            <p className="font-medium">
              För de riktigt små barnen, så går det såklart jättebra att vara
              med!
            </p>
            <p>
              Vi kommer ha med våra barn under ceremonin, men under festen får
              de hänga med barnvakt.
            </p>
          </div>
        </details>
        <details>
          <summary className="cursor-pointer font-semibold focus:outline-none ring-2 rounded ring-offset-2 ring-offset-white ring-white transition-all focus:ring-pink-400">
            Får jag ta med en plus ett?
          </summary>
          <div className="p-4 bg-slate-50 border border-slate-300 rounded mt-2 space-y-2">
            <p>
              Alla som inte har blivit bjudna som ett par på inbjudningskuvertet
              får ta med en plus ett. <span className="text-red-500">♥</span>
            </p>
          </div>
        </details>
        <details>
          <summary className="cursor-pointer font-semibold focus:outline-none ring-2 rounded ring-offset-2 ring-offset-white ring-white transition-all focus:ring-pink-400">
            Hur tar man sig ut/hem?
          </summary>
          <div className="p-4 bg-slate-50 border border-slate-300 rounded mt-2 space-y-2">
            <p>
              Närmsta busshållplatsen för Rosenhill är{" "}
              <strong className="font-semibold">Nyckelby (Ekerö)</strong> vid
              korsningen med ICA-butiken – som är 800 meter från Rosenhill.
              Vilket är ungefär 10 – 15 minuter med någorlunda raska steg.
            </p>
            <p>
              Bussen till Nyckelby går från Brommaplan. Antingen direktbuss 311,
              312 eller 309 (långsammare) eller med bussbyte från annan buss
              (kolla{" "}
              <a
                href="https://sl.se/"
                className="underline decoration-dashed decoration-pink-600 text-pink-600"
              >
                sl.se
              </a>
              ).
            </p>
          </div>
        </details>
        <details>
          <summary className="cursor-pointer font-semibold focus:outline-none ring-2 rounded ring-offset-2 ring-offset-white ring-white transition-all focus:ring-pink-400">
            Rekommenderat boende
          </summary>
          <div className="p-4 bg-slate-50 border border-slate-300 rounded mt-2 space-y-2">
            <p>
              Det finns ingen möjlighet att bo kvar på plats. Om man vill bo på
              hotell efter så rekommenderar vi{" "}
              <a
                href="https://www.scandichotels.se/hotell/sverige/stockholm/scandic-alvik"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dashed decoration-pink-600 text-pink-600"
              >
                Scandic Alvik
              </a>
            </p>
          </div>
        </details>
      </div>
    </>
  );
}
