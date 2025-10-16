#include<stdio.h>
void main(){
int matrix[3][3]={{10,20,30},{40,50,60},{70,80,90}};
for(int i=0;i<3;i++){
    for(int j=i;j<=i;j++){

        printf("%d ",matrix[i][j]);
    }
    printf("\n");
}



}
