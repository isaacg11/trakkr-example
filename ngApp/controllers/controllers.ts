namespace trakkr.Controllers {

  let statuses = ['open', 'priority', 'pending', 'complete'];

    export class HomeController {
        constructor() {
          console.log('home controller');
        }
    }

    export class UserController {
      public user;
      public id;

      public save() {
        this.user.id = this.id;
      /*  this.userService.save(this.product).then(() => {
          this.$state.go('home');
        }); */
      }

      constructor(
        //private productService:trakkr.Services.ProductService,
        private $state:ng.ui.IStateService,
        private $stateParams:ng.ui.IStateParamsService
      ) {
        //this.id = $stateParams['id'];
      }
    }

    export class ProjectController {
      private projects;
      private project;

      public saveProject() {
        this.ProjectService.save(this.project).then(() => {
          this.projects = this.ProjectService.list();
        });
      }

      public remove(id) {
        this.ProjectService.remove(id).then(() => {
          this.projects = this.ProjectService.list();
        });
      }

      constructor(
        private ProjectService:trakkr.Services.ProjectService
      ) {
        this.projects = ProjectService.list();
      }
    }

    export class SingleProjectController {
      private project;
      private newIssue:any;

      public addIssue(issue) {
        issue.project_id = this.project._id;
        this.IssueService.save(issue).then((project) => {
          this.project = project;
        });
      }

      constructor (
        private $stateParams:ng.ui.IStateParamsService,
        private ProjectService:trakkr.Services.ProjectService,
        private IssueService:trakkr.Services.IssueService
      ) {
        let id = $stateParams['id'];
        this.project = ProjectService.get(id);
      }
    }

    export class SlackController {
      private code;
      private client_id = 2194706410.199566494741;
      private client_secret = '9675b90460064320dcfc5745ecc8a995';
      private message = "Loading...";

      constructor(
        private $state:ng.ui.IStateService,
        private $stateParams:ng.ui.IStateParamsService,
        private $http:ng.IHttpService,
        private $scope,
        private $location,
        private UserService
      ) {
        $scope.location = $location;
        let code = $location.search().code;
        let url = "https://slack.com/api/oauth.access?client_id=2194706410.199566494741&client_secret=9675b90460064320dcfc5745ecc8a995&code=" + code;
        let instance = this;

        $http({
          method: 'GET',
          url: url
        }).then(function successCallback(response) {
            UserService.save(response.data);
          }, function errorCallback(response) {
            instance.message = "Sorry, there was a problem with the login.";
          });
      }
    }

    export class NavbarController {
      constructor (

      ) {
        console.log('registered NavbarController');
      }
    }
}
