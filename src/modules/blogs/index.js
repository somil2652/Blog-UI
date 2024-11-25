import { lazy } from "react";
const Create = lazy(() => import("./Create"));
const BulkUploadListing = lazy(() => import("./BulkUploadListing"));
const DetailedView = lazy(() => import("./DetailedView"));
const BulkUpload = lazy(() => import("./BulkUpload"));
const NotFound = lazy(() => import("./NotFound"));
const BulkErrorDetail = lazy(() => import("./BulkErrorDetail"));

const View = lazy(() => import("./View"));

export {
  BulkErrorDetail,
  BulkUpload,
  BulkUploadListing,
  Create,
  DetailedView,
  NotFound,
  View,
};
