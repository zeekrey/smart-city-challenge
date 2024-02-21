import { Step } from "@/components/step";
import { StepsProvider } from "@/components/step-context-provider";

/**
 * @typedef {Object} TStep
 * @property {string} title - The title of the step.
 * @property {number} next - The age of the person.
 * @property {number} previous - The age of the person.
 * @property {string} description - The age of the person.
 * @property {string} id - The age of the person.
 * @property {Object} conditions - The age of the person.
 */

/**
 * @typedef {Object} TStepsConfig
 * @property {Object} context
 * @property {Object} context.anzahl_kinder
 * @property {number} context.anzahl_kinder.erwachsene
 * @property {number} context.anzahl_kinder.jugendliche
 * @property {number} context.anzahl_kinder.kinder
 * @property {number} context.anzahl_kinder.kleinkinder
 * @property {Object} context.ausgaben
 * @property {number} context.ausgaben.heizkosten
 * @property {number} context.ausgaben.kaltmiete
 * @property {number} context.ausgaben.nebenkosten
 * @property {Object} context.einkommen
 * @property {number} context.einkommen.arbeitslosengeld
 * @property {number} context.einkommen.brutto
 * @property {number} context.einkommen.elterngeld
 * @property {number} context.einkommen.kindergeld
 * @property {number} context.einkommen.netto
 * @property {number} context.einkommen.rente
 * @property {number} context.einkommen.sonstiges
 * @property {boolean} context.kinder
 * @property {boolean} context.partnerschaft
 * @property {boolean} context.schwanger
 * @property {number} currentStep
 * @property {Object.<number, TStep>} steps
 */

/**
 * @type {TStepsConfig}
 */
const stepsConfig = {
  context: {
    anzahl_kinder: {
      erwachsene: 0,
      jugendliche: 0,
      kinder: 0,
      kleinkinder: 0,
    },
    ausgaben: {
      heizkosten: 0,
      kaltmiete: 0,
      nebenkosten: 0,
    },
    einkommen: {
      arbeitslosengeld: 0,
      brutto: 0,
      elterngeld: 0,
      kindergeld: 0,
      netto: 0,
      rente: 0,
      sonstiges: 0,
    },
    kinder: false,
    partnerschaft: false,
    schwanger: false,
  },
  currentStep: 0,
  steps: {
    0: {
      conditions: {},
      description:
        "Es ist zunächst wichtig zu wissen, ob Sie in einer Partnerschaft leben. Partnerschaften sind zum Beispiel Ehe, eingetragene Lebenspartnerschaften oder auch nichteheliche Lebensgemeinschaften die in einer gemeinsamen Wohnung leben.",
      id: "partnerschaft",
      next: 1,
      previous: 0,
      title: "Leben Sie in einer Partnerschaft?",
    },
    1: {
      conditions: {},
      description: "Leben Kinder in Ihren Haushhalt?",
      id: "kinder",
      next: 2,
      previous: 0,
      title: "Haben Sie Kinder?",
    },
    2: {
      conditions: {
        kinder: true,
      },
      description: "Wie viele Kinder leben in Ihrem Haushalt?",
      id: "kinder-anzahl",
      next: 3,
      previous: 1,
      title: "Wie viele Kinder leben in Ihrem Haushalt?",
    },
    3: {
      conditions: {},
      description:
        "Tragen Sie hier bitte Ihre Kaltmiete, Heiz- und Betriebskosten ein. Wenn Sie Bürgergeld beziehen, übernimmt Ihr Jobcenter die Kosten für Unterkunft und Heizung in angemessener Höhe (die Höhe der Kosten für die Unterkunft werden regional unterschiedlich berechnet). Ist Ihre Wohnung nicht angemessen, müssen Sie die Kosten möglichst senken.",
      id: "monatliche-ausgaben",
      next: 4,
      previous: 2,
      title: "Ihre Monatlichen Ausgaben",
    },
    4: {
      conditions: {},
      description:
        "Geben Sie hier bitte jeweils Ihr Brutto- und Nettoeinkommen (bitte beide Werte eintragen) an und wenn zutreffend ebenfalls das Ihrer Partnerin /Ihres Partners.",
      id: "monatliches-einkommen",
      next: 5,
      previous: 3,
      title: "Einkommen aus Erwerbstätigkeit",
    },
    5: {
      conditions: {},
      description:
        "Hierzu zählen zum Beispiel Arbeitslosengeld I, Krankengeld, Elterngeld über dem Freibetrag von 300 Euro, Unterhalt und Unterhaltsvorschuss vom Jugendamt, Renten, Einnahmen aus Vermietung, Zinsen oder Steuererstattungen.",
      id: "weiteres-einkommen",
      next: 5,
      previous: 4,
      title: "Weiteres Einkommen",
    },
    // Schwangerschaft und diverse andere Fragen fehlen
  },
};

export default function StepPage() {
  return (
    <main className="flex flex-col sm:gap-12 min-h-dvh mx-auto max-w-3xl">
      <StepsProvider value={stepsConfig}>
        {Object.entries(stepsConfig.steps).map(([id, step]) => (
          <Step id={step.id} key={id} step={step} />
        ))}
      </StepsProvider>
    </main>
  );
}