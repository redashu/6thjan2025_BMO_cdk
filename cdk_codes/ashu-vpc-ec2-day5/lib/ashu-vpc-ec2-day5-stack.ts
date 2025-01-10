import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AshuVpcEc2Day5Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'ashu-vpc', {
      cidr: '10.1.0.0/24',
      maxAzs: 2,
      vpcName: 'ashu-vpc',
      subnetConfiguration: [
      {
        cidrMask: 28,
        name: 'ashu-PublicSubnet1',
        subnetType: ec2.SubnetType.PUBLIC,
      },
      {
        cidrMask: 28,
        name: 'ashu-PublicSubnet2',
        subnetType: ec2.SubnetType.PUBLIC,
      },
      ],
    });
  }
}
