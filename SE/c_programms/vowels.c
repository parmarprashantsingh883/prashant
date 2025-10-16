#include<stdio.h>
void main(){
    char letter;
    printf("enter the letter:");
    scanf("%c",&letter);
    if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u' ||
    letter=='A' || letter=='E' || letter=='I' || letter=='O' || letter=='U')
          printf("you have entered a vowel");
    else{
        printf("you  have entered a consonant");
    }

}

