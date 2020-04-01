# maskeauf locations

## Description

A simple infrastructure draft and prototype for maskeauf.de's find a mask
feature.

## Basic Approach

The stack is split into 2 parts. The (front-end) single page application and a
BFF (backend for frontend) in the form of an AWS Lambda function. Essentially
the BFF could be used to fetch from external APIs (i.e. geolocation provider and
our own mask location data), transform and cache the data for optimal use by the
front-end application.

The `aws-simple` library is used for development convenience. It allows easy
setup of an AWS infrastructure and local dev server.

---

Copyright (c) 2020, maskeauf.de.
