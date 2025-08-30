import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

const examples = [
  {
    title: 'Playtime Activities',
    stereotypical: {
      image: 'https://picsum.photos/seed/girl-doll/600/400',
      hint: 'girl doll',
      description: 'Girls are often shown in domestic settings, playing with dolls or kitchen sets, reinforcing caregiving roles.',
    },
    nonStereotypical: {
      image: 'https://picsum.photos/seed/girl-building/600/400',
      hint: 'girl building',
      description: 'Encourage play with STEM toys like building blocks or science kits, fostering problem-solving and creativity.',
    },
  },
  {
    title: 'Character Behavior',
    stereotypical: {
      image: 'https://picsum.photos/seed/boy-disruptive/600/400',
      hint: 'boy disruptive',
      description: 'Boys are frequently portrayed as rebellious or "cool" for breaking rules, which can normalize disruptive behavior.',
    },
    nonStereotypical: {
      image: 'https://picsum.photos/seed/boy-helping/600/400',
      hint: 'boy helping',
      description: 'Showcasing boys as collaborative, empathetic, and kind helps build a broader definition of masculinity.',
    },
  },
  {
    title: 'Appearance and Interests',
    stereotypical: {
      image: 'https://picsum.photos/seed/princess-makeup/600/400',
      hint: 'princess makeup',
      description: 'An overwhelming focus on beauty, princesses, and makeup suggests a girl\'s value is tied to her appearance.',
    },
    nonStereotypical: {
      image: 'https://picsum.photos/seed/girl-climbing/600/400',
      hint: 'girl climbing',
      description: 'Highlighting interests in sports, adventure, or leadership teaches that girls can be strong, active, and bold.',
    },
  },
];

export default function ExamplesSection() {
  return (
    <section id="examples" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">See the Difference</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Stereotypes in Action</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Recognizing stereotypes is the first step. Here’s a look at common tropes found in kids’ media versus healthier, more inclusive alternatives.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {examples.map((example, index) => (
            <div key={index} className="mx-auto max-w-5xl">
              <h3 className="text-2xl font-headline font-semibold text-center mb-6">{example.title}</h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-destructive/50 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <ThumbsDown className="h-5 w-5" />
                      Stereotypical Portrayal
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Image
                      src={example.stereotypical.image}
                      alt="Stereotypical example"
                      width={600}
                      height={400}
                      data-ai-hint={example.stereotypical.hint}
                      className="rounded-lg aspect-[3/2] object-cover"
                    />
                    <CardDescription>{example.stereotypical.description}</CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-primary/50 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <ThumbsUp className="h-5 w-5" />
                      Inclusive Alternative
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Image
                      src={example.nonStereotypical.image}
                      alt="Non-stereotypical example"
                      width={600}
                      height={400}
                      data-ai-hint={example.nonStereotypical.hint}
                      className="rounded-lg aspect-[3/2] object-cover"
                    />
                    <CardDescription>{example.nonStereotypical.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
