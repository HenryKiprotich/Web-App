'use client';
export default function HomePage() { 

  return (
    // These below are Tailwind classes:
    <main className="p-8">
      <div className="p-4 flex space-x-2 bg-indigo-300 rounded-lg">
        <img src="/DeepRealLogo.png" alt="Logo" className="h-12" />
        <h2 className="text-2xl font-bold">Welcome to DeepScanAI</h2>
      </div> 

      <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
        Gain insights into your online interactions and identify toxicity before it affects you </div>         
          
        <div className="grid grid-cols-2 gap-4">
          <img
         className="h-62 w-full object-cover rounded-md"
          src="/PlatformsImage.png"
          alt="Modern building architecture"/>
          <img
        className="h-62 w-full object-cover rounded-md"
        src="/HarassmentImage.png"
        alt="Another architecture image"/>
        </div>

        <div className="bg-indigo-100 p-4 rounded-lg">
          <p className="text-gray-700">
          Nowadays, social media has become a breeding ground for negativity, cyberbullying, 
          and online harassment. Unfortunately, many cases go unnoticed, leaving victims
          without support and responsible agencies without the data needed to take action.
          Our AI-powered platform is designed to change that. Using an advanced, 
          fine-tuned AI model, we analyze data and track online interactions across platforms
          like X (Twitter), Facebook, and TikTok. Our system detects harmful comments, 
          categorizes sentiment, and provides real-time insights directly on your 
          dashboard. With accurate data analysis, our platform empowers individuals,
          organizations, and regulatory bodies with the information they need to 
          combat cyberbullying effectively.         
          
         </p>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <p className="text-black font-medium">Register an account today</p>  
          <a href="@app/auth/signup" className="mt-1 block text-lg leading-tight font-small
           text-blue-500 hover:underline"> Sign Up </a>
        </div>
        <div className="flex items-center space-x-2 mt-2">        
          <p className="text-black font-medium">If you have an account, hit</p>
          <a href="/dashboard" className="mt-1 block text-lg leading-tight font-small
           text-blue-500 hover:underline"> Sign In </a>     
        </div>
      </div>
    </main>
  );
}

