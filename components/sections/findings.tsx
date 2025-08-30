import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Users, MessageSquareText } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const findingsData = [
  {
    icon: <Palette className="h-8 w-8 text-accent" />,
    title: 'Visual Elements',
    description: 'Colors and objects in videos consistently code gender along traditional lines.',
    stats: [
      { label: 'Beauty videos that were "pink-heavy"', value: 90, text: '9 out of 10' },
      { label: 'Fun/School videos that were "blue-heavy"', value: 65, text: '13 out of 20' },
      { label: 'Beauty videos with high pastel tones', value: 80, text: '8 out of 10' },
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Character Roles',
    description: 'Characters often fall into predictable roles, with females leading in presentation but males often leading in action.',
    stats: [
      { label: 'Videos with a female lead character', value: 60, text: '18 out of 30' },
      { label: 'Videos where a male was the key decision-maker', value: 40, text: '12 out of 30' },
      { label: 'Videos featuring collaborative problem-solving', value: 47, text: '14 out of 30' },
    ],
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-accent" />,
    title: 'Gendered Messages',
    description: 'The language used in videos reinforces stereotypes about "appropriate" themes for boys and girls.',
    stats: [
      { label: 'Videos containing domestic-themed words (e.g., "kitchen", "princess")', value: 67, text: '20 out of 30' },
      { label: 'Non-beauty videos using adventurous words (e.g., "superhero", "build")', value: 70, text: '14 out of 20' },
      { label: 'Videos with a majority of female pronouns in speech', value: 60, text: '18 out of 30' },
    ],
  },
];

export default function FindingsSection() {
  return (
    <section id="findings" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">The Research</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">What We Discovered</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our analysis of 30 popular "Like Nastya" videos revealed consistent patterns of gender stereotyping. Here's a summary of the key findings.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {findingsData.map((finding) => (
            <Card key={finding.title} className="flex flex-col h-full">
              <CardHeader className="flex flex-col items-center text-center">
                {finding.icon}
                <CardTitle className="mt-4 font-headline text-2xl">{finding.title}</CardTitle>
                <CardDescription>{finding.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  {finding.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{stat.label}</span>
                        <span className="text-sm font-semibold text-primary">{stat.text}</span>
                      </div>
                      <Progress value={stat.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
