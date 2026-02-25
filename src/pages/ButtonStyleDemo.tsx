import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart } from "lucide-react";

const styles = [
  {
    name: "מינימליסטי חד",
    desc: "פינות חדות, ללא צל, מעבר צבע עדין",
    primary: "rounded-none border-0 bg-[hsl(27,17%,20%)] text-white hover:bg-[hsl(27,17%,28%)] shadow-none px-8 h-12 text-base",
    outline: "rounded-none border border-[hsl(27,17%,20%)] bg-transparent text-[hsl(27,17%,20%)] hover:bg-[hsl(27,17%,20%)] hover:text-white px-8 h-12 text-base",
    ghost: "rounded-none text-[hsl(27,17%,20%)] hover:bg-[hsl(26,23%,95%)] px-8 h-12 text-base",
  },
  {
    name: "אלגנטי עם גבול זהב",
    desc: "פינות מעט מעוגלות, גבול בז׳ דק, הובר עם מילוי",
    primary: "rounded-sm border-0 bg-[hsl(27,17%,20%)] text-white hover:bg-[hsl(27,17%,28%)] shadow-sm px-8 h-12 text-base",
    outline: "rounded-sm border-2 border-[hsl(37,29%,78%)] bg-transparent text-[hsl(27,17%,20%)] hover:bg-[hsl(37,29%,78%)]/20 px-8 h-12 text-base",
    ghost: "rounded-sm text-[hsl(27,17%,20%)] hover:bg-[hsl(37,29%,78%)]/15 px-8 h-12 text-base",
  },
  {
    name: "מודרני בולט",
    desc: "עיגול קל, צל עמוק, אפקט scale בהובר",
    primary: "rounded-md bg-[hsl(27,17%,20%)] text-white shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.97] transition-all px-8 h-12 text-base",
    outline: "rounded-md border-2 border-[hsl(27,17%,20%)] bg-transparent text-[hsl(27,17%,20%)] hover:bg-[hsl(27,17%,20%)] hover:text-white shadow-md px-8 h-12 text-base",
    ghost: "rounded-md text-[hsl(27,17%,20%)] hover:bg-[hsl(26,23%,95%)] shadow-sm px-8 h-12 text-base",
  },
  {
    name: "קלאסי עגול (Pill)",
    desc: "פינות מעוגלות לגמרי, מראה רך",
    primary: "rounded-full bg-[hsl(27,17%,20%)] text-white hover:bg-[hsl(27,17%,28%)] shadow-sm px-8 h-12 text-base",
    outline: "rounded-full border border-[hsl(27,17%,20%)] bg-transparent text-[hsl(27,17%,20%)] hover:bg-[hsl(27,17%,20%)] hover:text-white px-8 h-12 text-base",
    ghost: "rounded-full text-[hsl(27,17%,20%)] hover:bg-[hsl(26,23%,95%)] px-8 h-12 text-base",
  },
];

const ctaStyles = [
  {
    name: "רקע חום כהה",
    className: "rounded-sm bg-[hsl(27,17%,20%)] text-white hover:bg-[hsl(27,17%,28%)] px-10 h-14 text-lg shadow-lg",
  },
  {
    name: "רקע בז׳/זהב",
    className: "rounded-sm bg-[hsl(37,29%,78%)] text-[hsl(27,17%,20%)] hover:bg-[hsl(37,29%,72%)] px-10 h-14 text-lg shadow-lg",
  },
  {
    name: "גבול בלבד (Outline)",
    className: "rounded-sm border-2 border-[hsl(27,17%,20%)] bg-transparent text-[hsl(27,17%,20%)] hover:bg-[hsl(27,17%,20%)] hover:text-white px-10 h-14 text-lg",
  },
];

const ButtonStyleDemo = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl text-center mb-4">סגנונות כפתורים</h1>
        <p className="text-muted-foreground text-center mb-16 text-lg">לחצי על כל כפתור כדי להרגיש את האינטראקציה</p>

        {/* Button Styles */}
        <div className="space-y-16">
          {styles.map((style, i) => (
            <div key={i} className={`p-10 rounded-lg ${i % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}`}>
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">{i + 1}</span>
                <h2 className="font-serif text-2xl">{style.name}</h2>
              </div>
              <p className="text-muted-foreground mb-8 mr-11">{style.desc}</p>
              
              <div className="grid md:grid-cols-3 gap-8 mr-11">
                <div className="space-y-3">
                  <span className="text-xs tracking-widest text-muted-foreground uppercase block">ראשי (Primary)</span>
                  <div className="flex flex-wrap gap-3">
                    <button className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ${style.primary}`}>
                      התחל עכשיו
                    </button>
                    <button className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ${style.primary}`}>
                      <Camera className="w-4 h-4" />
                      גלריה
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <span className="text-xs tracking-widest text-muted-foreground uppercase block">משני (Outline)</span>
                  <div className="flex flex-wrap gap-3">
                    <button className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ${style.outline}`}>
                      למד עוד
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <span className="text-xs tracking-widest text-muted-foreground uppercase block">רוח (Ghost)</span>
                  <div className="flex flex-wrap gap-3">
                    <button className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ${style.ghost}`}>
                      <Heart className="w-4 h-4" />
                      שמור
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Styles */}
        <div className="mt-20">
          <h2 className="font-serif text-3xl text-center mb-3">כפתור CTA ראשי</h2>
          <p className="text-muted-foreground text-center mb-12">הכפתור הבולט ביותר — לדוגמה בהירו</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ctaStyles.map((cta, i) => (
              <div key={i} className="text-center space-y-4 p-8 rounded-lg bg-secondary/30">
                <span className="text-sm font-medium text-foreground block">{cta.name}</span>
                <button className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ${cta.className}`}>
                  הזמן צילום
                  <Camera className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-16 text-sm">
          * הדף הזה זמני — ספרי לי איזה סגנון את מעדיפה ואמחק אותו
        </p>
      </div>
    </div>
  );
};

export default ButtonStyleDemo;
