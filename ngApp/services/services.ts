namespace trakkr.Services {
  export class ProjectService {
    private ProjectResource;

    public get(id) {
      return this.ProjectResource.get({id:id});
    }

    public list() {
      return this.ProjectResource.query();
    }

    public save(project) {
      return this.ProjectResource.save(project).$promise;
    }

    public remove(id) {
      return this.ProjectResource.delete({id:id}).$promise;
    }

    constructor($resource:ng.resource.IResourceService) {
      this.ProjectResource = $resource('/api/projects/:id');
    }
  }

  angular.module('trakkr').service('ProjectService', ProjectService);


  export class UserService {
    private UserResource;
    private user:any = {};

    public get(id) {
      return this.UserResource.get({id:id});
    }

    public list() {
      return this.UserResource.query();
    }

    public save(data) {
      this.user.name = data.user.name;
      this.user.email = data.user.email;
      this.user.access_token = data.access_token;
      this.user.id = data.user.id;

      return this.UserResource.save(this.user, function (data) {
         console.log('success, got data: ', data);
       }, function (err) {
         console.log(err);
       });
    }

    // Not using at the moment
    /*public remove(id) {
      return this.UserResource.delete({id:id}).$promise;
    }*/

    constructor($resource:ng.resource.IResourceService) {
      this.UserResource = $resource('/api/user/:id');
    }
  }

  angular.module('trakkr').service('UserService', UserService);

  export class IssueService {
    private IssueResource;

    public get(id) {
      return this.IssueResource.get({id:id});
    }

    public list() {
      return this.IssueResource.query();
    }

    public save(issue) {
      return this.IssueResource.save(issue).$promise;
    }

    public remove(id) {
      return this.IssueResource.delete({id:id}).$promise;
    }

    constructor($resource:ng.resource.IResourceService) {
      this.IssueResource = $resource('/api/issues/:id');
    }
  }

  angular.module('trakkr').service('IssueService', IssueService);

}
