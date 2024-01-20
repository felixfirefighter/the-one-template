import { subDays } from 'date-fns'

export const MAILS = [
  {
    name: 'Alex Low',
    title: 'Meeting Tomorrow',
    content: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

    Please come prepared with any questions or insights you may have. Looking forward to our meeting!
    
    Best regards, Alex`,
    date: subDays(new Date(), 10),
    labels: [
      {
        label: 'work',
      },
      {
        label: 'meeting',
      },
      {
        label: 'important',
      },
    ],
  },
  {
    name: 'Abby Goodman',
    title: 'Product Launch Update',
    content: `The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.

    I'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.
    
    Let's make this product launch a resounding success!
    
    Best regards, Abby`,
    date: subDays(new Date(), 20),
    labels: [
      {
        label: 'meeting',
      },
      {
        label: 'important',
      },
    ],
  },
  {
    name: 'Josephine Vu',
    title: 'Product Update',
    content: `Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.

    I have a few minor suggestions that I'll include in the attached document.
    
    Let's discuss these during our next meeting. Keep up the excellent work!
    
    Best regards, Josephine`,
    date: subDays(new Date(), 25),
    labels: [
      {
        label: 'personal',
      },
    ],
  },
]
