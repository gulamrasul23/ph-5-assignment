Answer 1. Difference between getElementById, getElementsByClassName.
          (i) getElementById() HTML Document থেকে নির্দিষ্ট একটি id দেওয়া element কে accesss করতে পারে ।
          (ii) getElementByClassName() HTML Document একই class দেওয়া সকল element কে accesss করতে পারে ।
          Difference between querySelector and querySelectorAll
          (i) querySelector() HTML Document থেকে প্রথম যে element ঐ selector সাথে মিলে যায় শুধু মাত্র ঐ একটি element কে accesss করতে পারে ।
          (ii) querySelectorAll() HTML Document থেকে যে element ঐ selector সাথে মিল ঐ সকল element কে accesss করতে পারে ।

          
Answer 2. (i) নতুন element তৈরি করতে document.createElement("tagName") ব্যবহার করতে হয়।
          (ii) নতুন element যোগ করতে appendChild() ব্যবহার করতে হয়।

          
Answer 3. Event Bubbling হলো কোনো child element এ event ঘটলে সেই event ধাপে ধাপে তার parent থেকে grandparent হয়ে পুরো document এর উপরে উপরে ছড়িয়ে পড়ে।
        দরি একটা <button> আছে <div> এর ভিতরে যদি  button এ click করা হয় তাহলে event প্রথমে button এ trigger হবে তারপর ওই event bubble হয়ে তার parent <div> এ যাবে এরপর body, তারপর document পর্যন্ত যাবে।

Answer 4.  অনেকগুলো child element এর জন্য আলাদা আলাদা event listener বসানোর বদলে, আমরা তাদের common parent element-এ একটি event listener বসাই event যখন bubble হয়ে parent এ আসে,
           তখন parent event listener থেকে আমরা বুঝে নিই কোন child এ event হয়েছিল এটাই Event Delegation । 
           এইটা usefull কারন--
           (i) অনেক child element-এর জন্য আলাদা আলাদা listener বসানোর দরকার হয় না।
           (ii) ভবিষ্যতে নতুন element যোগ হলেও কাজ করবে।
           (iii) code ছুটো হয়।
Answer 5. preventDefault() কোনো element এর default behavior বন্ধ করে দেয় ।
          stopPropagation() event bubbling বন্ধ করে দেয়,মানে কোনো event যাতে parent element এ bubble হয়ে না যায়।

