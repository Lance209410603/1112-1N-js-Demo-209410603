const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
          showDemo.innerHTML = `<iframe src='../demo/w01/index.html' width="100%" height="100%"/>`;
          break;
          case 'w1-md':
          showDemo.innerHTML = `<iframe src='../md/w01/w01_03.html' width="100%" height="100%"/>`;
          break;
        case 'w2':
          showDemo.innerHTML = `<iframe src='../demo/w02-tictactoe_starter/tictactoe_03.html' width="100%" height="100%"/>`;
         break;
         case 'w2-md':
          showDemo.innerHTML = `<iframe src='../md/w02/w02_03.html' width="100%" height="100%"/>`;
          break;
         case 'w3':
          showDemo.innerHTML = `<iframe src='../demo/w03-reviews_starter/index.html' width="100%" height="100%"/>`;
         break;
         case 'w3-md':
          showDemo.innerHTML = `<iframe src='../md/w03/w03_03.html' width="100%" height="100%"/>`;
          break;
         case 'w4':
          showDemo.innerHTML = `<iframe src='../demo/w04_menu_starter/index.html' width="100%" height="100%"/>`;
         break;
         case 'w4-md':
          showDemo.innerHTML = `<iframe src='../md/w04/w04_03.html' width="100%" height="100%"/>`;
          break;
         case 'w5':
          showDemo.innerHTML = `<iframe src='../demo/w05-modal_starter/index.html' width="100%" height="100%"/>`;
         break;
         case 'w5-md':
          showDemo.innerHTML = `<iframe src='../md/w05/w05_03.html' width="100%" height="100%"/>`;
          break;
         case 'w6-1':
          showDemo.innerHTML = `<iframe src='../demo/w06-array/p1_03/p1_03.html' width="100%" height="100%"/>`;
         break;
         case 'w6-2':
          showDemo.innerHTML = `<iframe src='../demo/w06-array/p2_03/p2_03.html' width="100%" height="100%"/>`;
         break;
         case 'w6-3':
          showDemo.innerHTML = `<iframe src='../demo/w06-array/p3_03/p3_03.html' width="100%" height="100%"/>`;
         break;
         case 'w6-md':
          showDemo.innerHTML = `<iframe src='../md/w06/w06_03.html' width="100%" height="100%"/>`;
          break;
         case 'w7-1':
          showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_03/p1_bmi_93/p1_03.html' width="100%" height="100%"/>`;
         break;
         case 'w7-2':
          showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_03/p2_counter_03/index.html' width="100%" height="100%"/>`;
         break;
         case 'w7-3':
          showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_03/p3_tour_03/index.html' width="100%" height="100%"/>`;
         break;
         case 'w9-md':
         showDemo.innerHTML = `<iframe src='../md/w09/w09_03.html' width="100%" height="100%"/>`;
         break;
         case 'w15':
          showDemo.innerHTML = `<iframe src='../demo/w15-store-product/index.html' width="100%" height="100%"/>`;
         break;
   }
}