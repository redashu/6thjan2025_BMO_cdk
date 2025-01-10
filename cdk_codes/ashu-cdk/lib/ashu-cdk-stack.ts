import * as cdk from 'aws-cdk-lib';
import * as s3  from  'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AshuCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // creating s3 bucket using L1 construct
    const ashub1 = new s3.CfnBucket(this, 'AshuL1bucket' , {
      bucketName: 'ashutoshh-bmo-bucket',
      versioningConfiguration: {
        status: 'Enabled'
      },
      accessControl: 'Private'
    });
    
  }
}
