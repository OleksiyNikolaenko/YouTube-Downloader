import { Card, CardFooter, CardHeader } from '../ui/card';

const steps = [
  {
    id: 1,
    title: 'Крок 1: Копіювання URL',
    description:
      'Знайдіть відео, яке потрібно завантажити,  скопіюйте URL-адресу.',
  },
  {
    id: 2,
    title: 'Крок 2: Вставити URL-адресу',
    description: 'Вставте скопійований URL у поле введення.',
  },
  {
    id: 3,
    title: 'Крок 3: Завантажити',
    description: 'Виберіть потрібний формат і натисніть кнопку завантаження.',
  },
];

export const GuidePannel = () => {
  return (
    <section className="text-center" id="how-it-work">
      <h2 className="font-manrope mt-10 text-3xl">Як це працює</h2>
      <p className="mt-1 text-lg text-black dark:text-gray-400">
        Найпростіший гайд із завантаження відео з YouTube
      </p>

      <ul className="mt-5 flex gap-8">
        {steps.map((step) => {
          return (
            <li className="group shadow-xs" key={step.id}>
              <Card className="w-[340px] text-center">
                <CardHeader className="w-full">
                  <div className="mb-2 flex items-center justify-center">
                    <span className="group-hover:text-primary group-hover:border-primary flex h-24 w-24 items-center justify-center rounded-full border-4 text-[58px] leading-none text-gray-300 transition-all duration-150 ease-in-out">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </CardHeader>
                <CardFooter>
                  <p>{step.description}</p>
                </CardFooter>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
