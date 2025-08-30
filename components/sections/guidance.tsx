import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, School, Users, CheckCircle2, Film } from 'lucide-react';

const guidanceData = {
  parents: {
    icon: <Heart className="h-6 w-6" />,
    title: "For Parents",
    tips: [
      "Co-watch media with your child and ask open-ended questions like, 'What do you think about what that character did?'",
      "Seek out shows, movies, and YouTubers that feature diverse characters and challenge traditional gender roles.",
      "When you see a stereotype, pause and discuss it. 'It seems like only the girls are playing with dolls here. Can boys play with dolls too?'",
      "Encourage critical thinking by asking who creates the videos and what messages they might be sending.",
      "Balance screen time with other activities like reading books with diverse heroes and creative play."
    ]
  },
  teachers: {
    icon: <School className="h-6 w-6" />,
    title: "For Teachers",
    tips: [
      "Use short media clips in the classroom to spark discussions about gender representation.",
      "Curate a classroom library and media list that showcases boys who are nurturing and girls who are adventurous leaders.",
      "Create media-literacy lesson plans that teach students to identify and question stereotypes in ads and shows.",
      "Invite guest speakers of all genders from various professions to break down career stereotypes.",
      "Assign projects where students can create their own media that tells inclusive stories."
    ]
  },
  caretakers: {
    icon: <Users className="h-6 w-6" />,
    title: "For Caretakers",
    tips: [
      "Choose content that shows characters solving problems through collaboration, not aggression or passive compliance.",
      "When a child mimics a stereotype from a show, gently redirect by asking questions and offering alternatives.",
      "Compliment children on their skills, efforts, and ideas rather than their appearance or conforming to a role.",
      "Introduce a variety of content, including documentaries, stop-motion animation, and educational shows.",
      "Talk to other caretakers and parents about which media choices are working for their children and share recommendations."
    ]
  }
};

export default function GuidanceSection() {
  return (
    <section id="guidance" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Actionable Advice</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">How You Can Help</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Countering gender stereotypes is a team effort. Here’s how you can foster a more inclusive media environment for children.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-5xl mt-12 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <h3 className="text-2xl font-headline font-semibold text-center mb-6">Practical Tips</h3>
            <Tabs defaultValue="parents" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm">
                <TabsTrigger value="parents">
                  <Heart className="mr-2 h-4 w-4" /> Parents
                </TabsTrigger>
                <TabsTrigger value="teachers">
                  <School className="mr-2 h-4 w-4" /> Teachers
                </TabsTrigger>
                <TabsTrigger value="caretakers">
                  <Users className="mr-2 h-4 w-4" /> Caretakers
                </TabsTrigger>
              </TabsList>
              
              {Object.entries(guidanceData).map(([key, data]) => (
                <TabsContent key={key} value={key}>
                  <Card className="bg-white/40 backdrop-blur-lg border-white/20 shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 font-headline text-primary">
                        {data.icon} {data.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {data.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                            <span className="text-foreground/80">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-2xl font-headline font-semibold text-center mb-6">Case Study Example</h3>
            <Card className="bg-white/40 backdrop-blur-lg border-white/20 shadow-xl overflow-hidden h-full">
               <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-primary">
                    <Film className="h-6 w-6" /> Nastya thinks she is a boy
                  </CardTitle>
              </CardHeader>
              <CardContent className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/lKmqHGUlZ38"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
