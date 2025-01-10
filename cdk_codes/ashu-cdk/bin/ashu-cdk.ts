#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AshuCdkStack } from '../lib/ashu-cdk-stack';


const app = new cdk.App();
new AshuCdkStack(app, 'AshuCdkStack', {});
