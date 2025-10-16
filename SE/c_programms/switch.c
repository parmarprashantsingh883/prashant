#include<stdio.h>
void main(){

int c;
printf("1:this is for the python\n");
printf("2:this is for the java\n");
printf("3:this is for the c language");
printf("4:this is for the c++");
 printf("please make a choice");
 scanf("%d",c);

 switch(c){
 case 1:
    printf("you selected the python");
    break;
 case 2:
    printf("you selected the java");
    break;
 case 3:
    printf("you selected the c language");
    break;
 case 4:
    printf("you selected the c++");
    break;
 default:
    printf("please select your optinon");


 }

}
