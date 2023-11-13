import { Component } from '@angular/core';

const reviews = [
  {
    name: 'Liam Osei',
    reviewTitle: 'Exceptional Logo Design!',
    reviewComment:
      'I am thoroughly impressed with the logo design provided by the designer. The attention to detail and creativity are unmatched. Would highly recommend!',
    rating: 5,
    dateOfReview: '2023-01-15',
    type: 'client',
  },
  {
    name: 'Sophie Mwangi',
    reviewTitle: 'Great Communication and Results',
    reviewComment:
      'Working with this designer was a breeze. They communicated effectively, understood our brand, and delivered a logo that exceeded our expectations. Very satisfied!',
    rating: 4,
    dateOfReview: '2023-02-05',
    type: 'client',
  },
  {
    name: 'Mateo Ibrahim',
    reviewTitle: 'Creative Genius!',
    reviewComment:
      "If you're looking for a designer who can bring your vision to life with a unique and creative touch, look no further. The logo design process was smooth, and the results speak for themselves. Highly recommended!",
    rating: 5,
    dateOfReview: '2023-03-20',
    type: 'client',
  },
  {
    name: 'Zara Abiodun',
    reviewTitle: 'Professional and Timely',
    reviewComment:
      'Working with this designer was a professional and efficient experience. They delivered a high-quality logo within the specified timeframe. I appreciate their commitment to excellence.',
    rating: 4,
    dateOfReview: '2023-04-10',
    type: 'client',
  },
  {
    name: 'Hugo Ekong',
    reviewTitle: 'Satisfied Customer',
    reviewComment:
      'The logo design process was collaborative, and the designer took the time to understand our brand identity. The result is a logo that perfectly represents our business. Very satisfied with the outcome!',
    rating: 4,
    dateOfReview: '2023-05-02',
    type: 'client',
  },
  {
    name: 'Emma Kone',
    reviewTitle: 'Impressive Work!',
    reviewComment:
      'The designer demonstrated a high level of skill and creativity in crafting our logo. We are impressed with the final result and grateful for their dedication to delivering excellence.',
    rating: 5,
    dateOfReview: '2023-06-18',
    type: 'client',
  },
  {
    name: 'Antonio Nkosi',
    reviewTitle: 'Unique Design Approach',
    reviewComment:
      'This designer brought a unique perspective to our logo design. The result is a distinctive and memorable logo that sets us apart. Great collaboration and excellent outcome!',
    rating: 4,
    dateOfReview: '2023-07-09',
    type: 'client',
  },
  {
    name: 'Isabella Diop',
    reviewTitle: 'Smooth Process',
    reviewComment:
      "The entire logo design process was smooth and hassle-free. The designer's attention to detail and ability to capture our brand essence in the logo were impressive. Highly recommended!",
    rating: 5,
    dateOfReview: '2023-08-27',
    type: 'client',
  },
  {
    name: 'Luca Okafor',
    reviewTitle: 'Fantastic Results!',
    reviewComment:
      "We are thrilled with the fantastic results of our logo design. The designer's expertise and creativity shine through in the final product. A job well done!",
    rating: 5,
    dateOfReview: '2023-09-15',
    type: 'client',
  },
  {
    name: 'Amina Andersen',
    reviewTitle: 'Responsive and Professional',
    reviewComment:
      'The designer was highly responsive and professional throughout the logo design process. They listened to our feedback and delivered a logo that exceeded our expectations. 10/10!',
    rating: 5,
    dateOfReview: '2023-10-03',
    type: 'client',
  },
  {
    name: 'Odun Adetola',
    reviewTitle: 'Outstanding Web Design!',
    reviewComment:
      'I collaborated with this designer on a web design project, and the results were outstanding. The attention to detail, creativity, and responsiveness were beyond my expectations. Highly recommend!',
    rating: 5,
    dateOfReview: '2023-01-15',
    type: 'freelancer',
  },
  {
    name: 'Ebuka Eze',
    reviewTitle: 'Impressive Logo Design',
    reviewComment:
      'Working with this designer on our company logo was a pleasure. Their ability to capture the essence of our brand and translate it into a visually appealing logo was impressive. Great communication and professionalism!',
    rating: 4,
    dateOfReview: '2023-02-05',
    type: 'freelancer',
  },
  {
    name: 'Fatima Diop',
    reviewTitle: 'Creative Illustrations',
    reviewComment:
      'I hired this designer for custom illustrations, and the creativity they brought to the project was exceptional. The illustrations perfectly matched the theme and added a unique touch to our content. Very satisfied!',
    rating: 5,
    dateOfReview: '2023-03-20',
    type: 'freelancer',
  },
  {
    name: 'Chijioke Eze',
    reviewTitle: 'User-Friendly App Design',
    reviewComment:
      'Collaborating with this designer on app design was a smooth process. They understood the user experience requirements and delivered a design that is not only visually appealing but also user-friendly. Professional and talented!',
    rating: 4,
    dateOfReview: '2023-04-10',
    type: 'freelancer',
  },
  {
    name: 'Aisha Kamara',
    reviewTitle: 'Branding Excellence',
    reviewComment:
      'This designer played a crucial role in redefining our brand identity. The branding materials they created were top-notch and perfectly aligned with our vision. I highly recommend their services!',
    rating: 4,
    dateOfReview: '2023-05-02',
    type: 'freelancer',
  },
  {
    name: 'Jabari Toure',
    reviewTitle: 'Efficient UX/UI Design',
    reviewComment:
      'I worked with this designer on a UX/UI design project, and I was impressed by their efficiency and attention to user experience. The final design exceeded my expectations, and the project was delivered on time. Great job!',
    rating: 5,
    dateOfReview: '2023-06-18',
    type: 'freelancer',
  },
  {
    name: 'Nadia Abiodun',
    reviewTitle: 'Versatile Graphic Design',
    reviewComment:
      'Versatility is the hallmark of this designer. From social media graphics to print materials, they demonstrated a wide range of graphic design skills. Collaborating with them was a pleasure, and the results were excellent!',
    rating: 4,
    dateOfReview: '2023-07-09',
    type: 'freelancer',
  },
  {
    name: 'Kofi Akintola',
    reviewTitle: 'Creative Animation Work',
    reviewComment:
      'I engaged this designer for animation work, and the creativity they brought to the animations was outstanding. The animations effectively conveyed the message and added a dynamic element to our content. Highly recommended!',
    rating: 5,
    dateOfReview: '2023-08-27',
    type: 'freelancer',
  },
  {
    name: 'Sara Ouedraogo',
    reviewTitle: 'Professional Print Design',
    reviewComment:
      'Working with this designer on print materials was a professional and enjoyable experience. The print designs were of high quality, and the attention to detail was commendable. I look forward to future collaborations!',
    rating: 5,
    dateOfReview: '2023-09-15',
    type: 'freelancer',
  },
  {
    name: 'Youssef Mwamba',
    reviewTitle: 'Responsive and Talented',
    reviewComment:
      'This designer was not only responsive to my feedback but also showcased immense talent in graphic design. The collaboration was smooth, and the final designs exceeded my expectations. A truly talented freelancer!',
    rating: 5,
    dateOfReview: '2023-10-03',
    type: 'freelancer',
  },
];

@Component({
  selector: 'app-user-ratings',
  templateUrl: './user-ratings.component.html',
  styleUrls: ['./user-ratings.component.scss'],
})
export class UserRatingsComponent {
  reviews = reviews;

  reviewsTotalRating =
    reviews.reduce((acc, next) => acc + next.rating, 0) / reviews.length;

  ratingsGauge = reviews.reduce(
    (acc, next) => {
      let clone = { ...acc };

      clone[next.rating] = clone[next.rating] + 1;

      console.log(clone);

      return clone;
    },
    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  )
}
