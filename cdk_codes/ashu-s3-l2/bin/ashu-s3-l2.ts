#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AshuS3L2Stack } from '../lib/ashu-s3-l2-stack';
import { AshuS3L2NewStack } from '../lib/ashu-s3-l2-stack';

const app = new cdk.App();
new AshuS3L2Stack(app, 'AshuS3L2Stack', {}); 

new AshuS3L2NewStack(app, 'AshuS3L2NewStack', {});