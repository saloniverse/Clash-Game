# **DOM Assignment 04**

## **Initial Output**

![](./DOM1/initialOutput.png)

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## **Task 1**

To change text color to white and background color to some specified color of a part of the webpage.

### **After Update**

![](./Output/DOM%20P1%20SS.png)

### **Project Solution**

```
const element = document.querySelectorAll(".clash-card__unit-stats");
element[0].style.backgroundColor = "#ec9b3b";
element[1].style.backgroundColor = "#ee5487";
element[2].style.backgroundColor = "#f6901a";
element[3].style.backgroundColor = "#82bb30";
element[4].style.backgroundColor = "#4facff";

element.forEach((e) => {e.style.color = "#fff"});

const element2 = document.querySelectorAll(".clash-card__unit-stats div:nth-child(3)");
element2.forEach((e) => {e.style.color = "#fff"});
```

---