#include<stdio.h>
int main(){
int salaray,annualSalary, netsalary,tax ;
printf("enter your monthly salary\n");
scanf("%d",&salaray);

annualSalary=salaray*12;
printf(" your annual salary is:%d\n",annualSalary);
if (annualSalary >= 300000 && annualSalary <= 400000) {
   tax=3;
}
else if (annualSalary >= 400000 && annualSalary <= 500000){
    tax=4;
}
else if(annualSalary >= 600000 && annualSalary <= 700000){
    tax=5;
}
else if (annualSalary >= 800000 && annualSalary <= 1000000){
    tax=8;
    printf("you are not a tax payer");
}
int  taxammount=(annualSalary*tax)/100;
 netsalary=annualSalary-taxammount;
 printf("the amout of tax you have paid\n%d\n",taxammount);
 printf("your netsalary is:%d",netsalary);
 return 0;
}
