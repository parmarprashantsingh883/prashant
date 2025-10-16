#include<stdio.h>
int main(){
    void disp(int a[]){
    printf("---------printing array elements-----\n");
    for(int i=0;i<5;i++){
        printf("%d\n",a[i]);
    }
}
int a[]={10,20,30,40,50};

int a1[]={60,70,80,90,100};
disp(a);
disp(a1);
return 0;

}

