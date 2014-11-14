'use strict';

angular.module('matrixApp')
.controller('MembersCtrl', function ($scope, $http, $modal) {

	$http.get('members.json').success(function(data){
		$scope.members = data;
	});

	$scope.gridOptions = { 
		data: 'members',
		showGroupPanel: true,
		enableCellSelection: true,
		enableRowSelection: false,
		enableCellEdit: true,
		columnDefs: [
		{field:'no', displayName:'Id'}, 
		{field:'name', displayName:'Name'}, 
		{field:'userType', displayName:'User Type'}, 
		{field:'loyalty', displayName:'Degree Loyalty'},
		{field:'joinDate', displayName:'Join Date'}]
	};

	$scope.showModal=function () {
		$scope.newMember={};
		var modalInstance = $modal.open({
			templateUrl: 'views/create-member.html',
			controller:'AddNewMemberCtrl',
			resolve: {
				newMember: function () {
					return $scope.newMember;
				}
			}
		})

		modalInstance.result.then(function (selectedItem) {
			$scope.members.push({
				no:$scope.members.length+1,
				name:$scope.newMember.name,
				userType:$scope.newMember.userType,
				loyalty:$scope.newMember.loyalty,
				joinDate:$scope.newMember.joinDate
			});
		});

	};
})
.controller('AddNewMemberCtrl', function ($scope, $modalInstance, newMember) {
	$scope.newMember=newMember;
	$scope.saveNewMember=function(){
		$modalInstance.close(newMember);
	};

	$scope.cancel =function(){
		$modalInstance.dismiss('cancel');
	}


	$scope.cancel =function(){
		$modalInstance.dismiss('cancel');
	};

});