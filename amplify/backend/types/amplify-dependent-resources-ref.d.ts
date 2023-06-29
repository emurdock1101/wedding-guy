export type AmplifyDependentResourcesAttributes = {
  api: {
    stripeRestApi: {
      ApiId: 'string';
      ApiName: 'string';
      RootUrl: 'string';
    };
  };
  auth: {
    big5amplifye0115051: {
      AppClientID: 'string';
      AppClientIDWeb: 'string';
      IdentityPoolId: 'string';
      IdentityPoolName: 'string';
      UserPoolArn: 'string';
      UserPoolId: 'string';
      UserPoolName: 'string';
    };
  };
  function: {
    webhookLambdaStripe: {
      Arn: 'string';
      LambdaExecutionRole: 'string';
      LambdaExecutionRoleArn: 'string';
      Name: 'string';
      Region: 'string';
    };
  };
  storage: {
    testResultStorage: {
      BucketName: 'string';
      Region: 'string';
    };
  };
};
