export default function About() {
  return (
    <div className="lg:ml-80 lg:mr-80">
      <div className="lg:mt-11 font-Merriweather">
        <h1 className="text-5xl font-extrabold text-center  font-Sofia text-white">ABOUT</h1>
        <h1 className="text-center mt-7 font-Merriweather text-white text-3xl">The last sporting Goods you'll ever need!</h1>
        <div className="mt-11 lg:flex lg:justify-between">
          <div className="pt-24">
            <p className="text-3xl font-bold text-left text-white">Company Information:</p>
            <h2 className="font-bold text-left pt-7 text-white">
              Peak Performance Sports specializes in providing high-quality <br /> sporting goods and equipment to athletes and sports enthusiasts of all levels. <br />
              Our range includes gear for various sports such as football, <br /> basketball, tennis, running, and outdoor activities.</h2>
          </div>
          <img className="rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-l-none rounded-r-none" src="https://i.ibb.co/5YLsNKz/premium-photo-1687509673996-0b9e35d58168.jpg" alt="" />
        </div>
        <div className="mt-11 lg:flex lg:justify-between">
          <img className="rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-l-none rounded-r-none" src="https://i.ibb.co/sHqRf1T/like.jpg" alt="" />
          <div className="pt-24">
            <p className="text-3xl font-bold text-right text-white">Mission Statement:</p>
            <h2 className="font-bold pt-7 text-right text-white">
              To inspire and support athletes of all levels by providing <br /> top-notch sporting goods and fostering a community <br /> dedicated to health, fitness, and performance.</h2>
          </div>
        </div>
        <div>
          <p className="text-3xl mt-4 font-bold text-center text-white">Vision Statement:</p>
          <img className="rounded-tl-3xl mt-14 block ml-auto mr-auto rounded-tr-none rounded-br-3xl rounded-l-none rounded-r-none" src="https://i.ibb.co/fGTyQRB/mission.jpg" alt="" />
          <h2 className="font-bold mt-8 text-center text-white">
            To be the leading provider of innovative and reliable sporting equipment, empowering individuals to achieve their highest potential in sports and fitness.</h2>
        </div>
        <h1 className="text-center text-3xl text-white mt-8">Our Team Section:</h1>
        <div className="flex mr-12 gap-8">
          <img className="rounded-tl-[50px] w-1/4 h-1/4 mt-14 rounded-tr-none rounded-br-[50px] rounded-l-none rounded-r-none" src="https://i.ibb.co/DGV1QJk/te08.webp" alt="" />
          <img className="rounded-tl-[50px] w-1/4 h-1/4 mt-14 rounded-tr-none rounded-br-[50px] rounded-l-none rounded-r-none" src="https://i.ibb.co/DftjWXq/te06.webp" alt="" />
          <img className="rounded-tl-[50px] w-1/4 h-1/4 mt-14 rounded-tr-none rounded-br-[50px] rounded-l-none rounded-r-none" src="https://i.ibb.co/Z6LH5N2/te01.webp" alt="" />
          <img className="rounded-tl-[50px] w-1/4 h-1/4 mt-14 rounded-tr-none rounded-br-[50px] rounded-l-none rounded-r-none" src="https://i.ibb.co/LPBygrT/te03.jpg" alt="" />
        </div>
        <div className="mt-11 lg:flex lg:justify-between">
          <div className="pt-24">
            <div className="text-white">
              Our Team Section:
              John Doe - Founder & CEO
              John is an experienced athlete with a passion for sports and business. He founded Peak Performance Sports to bring quality and innovation to the sporting goods industry.
              Jane Smith - Chief Marketing Officer
              Jane has over 10 years of experience in marketing and brand management. She is responsible for driving the company’s marketing strategy and outreach programs.
              Mike Johnson - Head of Product Development
              With a background in engineering and sports science, Mike leads the development of new products, ensuring they meet the highest standards of performance and durability.
              Emily Davis - Customer Service Manager
              Emily’s dedication to customer satisfaction ensures that every client receives the best service possible. She oversees our support team and handles customer inquiries and feedback.
            </div>
          </div>
          <img className="rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-l-none rounded-r-none" src="https://i.ibb.co/XjR2MbZ/premium-photo-1677529496297-fd0174d65941.jpg" alt="" />
        </div>
        <div className="mt-11 lg:flex lg:justify-between">
          <img className="rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-l-none rounded-r-none" src="https://i.ibb.co/rHFVWmW/store1661964205360-b0621b5a9366.jpg" alt="" />
          <div className="pt-24">
            <div className="text-white text-right">
              Our Store Location Information: <br />

              Main Store: 123 Athletic Drive, Sportstown, ST 12345 <br />
              Branch 1: 456 Sports Ave, Fitness City, FC 67890 <br />
              Branch 2: 789 Athlete Blvd, Performance Town, PT 11223
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
