const decisionTree = angular.module("decisionTree", []);

function mainController($scope, $http) {

    $http.get("/api/")
        .success(function (data) {
            $scope.questions = data;
            console.log(data);
        })
        .error(function (data) {
            console.log("Error: " + data);
        });

    $scope.load = function (questionName) {
        if (questionName) {
            console.log(questionName);
            $http.get('/api/question/' + questionName)
                .success(function (data) {
                    $scope.questions = data;
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        } else {
            $scope.questions = null;
            //Render the form.
            $("#ticketForm").show();
        }
    };

    $scope.sendMail = function () {
        $http.post("/api/ticket", $scope.formData)
            .success(function(data) {
                //Do something to tell the user the operation was succesful and maybe reset the state?
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        };
}