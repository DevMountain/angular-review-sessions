//directives/tableDirective.js

angular.module("seatingApp").directive('dmTable', function(swapService){
   
    //1. Take in the table on to a property on an isolate scope (hint: this is the ng-repeat var)
    //2. our template needs to ng-repeat over that that table
    
    
   return {
       scope:{
         table: '='
       },
       templateUrl: 'app/directives/tableTmpl.html',
       controller: function($scope){
           
           $scope.swap = function(oldIndex, newStudentNumber){
               $scope.tablePeople[oldIndex].studentNumber = newStudentNumber;
           }
           
           $scope.select2 = function(oldStudent){
               //if that student isn't on my table
               if(oldStudent && swapService.currentStudent) {
                   var newStudentNumber = swapService.currentStudent.studentNumber;
                   swapService.currentStudent.swapFn(swapService.currentStudent.oldIndex, oldStudent.studentNumber);
                   oldStudent.studentNumber = newStudentNumber;
               }
           }
           
            $scope.select = function(student, idx){
               if(!student || idx < 0){
                   return;
               }
               student.oldIndex = idx;
               swapService.currentStudent = student;
           }
        
           var setupData = function(){
               $scope.tablePeople = [];
               
               //$scope.table = [8,16,18]
               for(var i = 0; i < $scope.table.length; i++){
                   $scope.tablePeople.push({
                       studentNumber: $scope.table[i],
                       swapFn: $scope.swap
                   });
               }
           };
           setupData();
       }
   }
});