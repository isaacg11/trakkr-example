var trakkr;
(function (trakkr) {
    var Controllers;
    (function (Controllers) {
        var statuses = ['open', 'priority', 'pending', 'complete'];
        var HomeController = (function () {
            function HomeController() {
                console.log('home controller');
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var UserController = (function () {
            function UserController($state, $stateParams) {
                this.$state = $state;
                this.$stateParams = $stateParams;
            }
            UserController.prototype.save = function () {
                this.user.id = this.id;
            };
            return UserController;
        }());
        Controllers.UserController = UserController;
        var ProjectController = (function () {
            function ProjectController(ProjectService) {
                this.ProjectService = ProjectService;
                this.projects = ProjectService.list();
            }
            ProjectController.prototype.saveProject = function () {
                this.ProjectService.save(this.project).then(function () {
                });
            };
            ProjectController.prototype.remove = function (id) {
                var _this = this;
                this.ProjectService.remove(id).then(function () {
                    _this.projects = _this.ProjectService.list();
                });
            };
            return ProjectController;
        }());
        Controllers.ProjectController = ProjectController;
        var SingleProjectController = (function () {
            function SingleProjectController($stateParams, ProjectService, IssueService) {
                this.$stateParams = $stateParams;
                this.ProjectService = ProjectService;
                this.IssueService = IssueService;
                this.id = $stateParams['id'];
            }
            SingleProjectController.prototype.addIssue = function (issue) {
                var _this = this;
                issue.project_id = this.id;
                this.IssueService.save(issue).then(function (project) {
                    _this.project = project;
                });
            };
            return SingleProjectController;
        }());
        Controllers.SingleProjectController = SingleProjectController;
        var SlackController = (function () {
            function SlackController($state, $stateParams, $http, $scope, $location, UserService) {
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$http = $http;
                this.$scope = $scope;
                this.$location = $location;
                this.UserService = UserService;
                this.client_id = 2194706410.199566494741;
                this.client_secret = '9675b90460064320dcfc5745ecc8a995';
                this.message = "Loading...";
                $scope.location = $location;
                var code = $location.search().code;
                var url = "https://slack.com/api/oauth.access?client_id=2194706410.199566494741&client_secret=9675b90460064320dcfc5745ecc8a995&code=" + code;
                var instance = this;
                $http({
                    method: 'GET',
                    url: url
                }).then(function successCallback(response) {
                    UserService.save(response.data);
                }, function errorCallback(response) {
                    instance.message = "Sorry, there was a problem with the login.";
                });
            }
            return SlackController;
        }());
        Controllers.SlackController = SlackController;
        var NavbarController = (function () {
            function NavbarController() {
                console.log('registered NavbarController');
            }
            return NavbarController;
        }());
        Controllers.NavbarController = NavbarController;
    })(Controllers = trakkr.Controllers || (trakkr.Controllers = {}));
})(trakkr || (trakkr = {}));
