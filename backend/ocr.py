from cnocr import CnOcr
import numpy as np
import json
import sys


class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        if isinstance(obj, np.floating):
            return round(float(obj),2)
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)


img_fp = sys.argv[1]
rec_model = sys.argv[2]
rec_backend = sys.argv[3]
det_model = sys.argv[4]
det_backend = sys.argv[5]
ocr = CnOcr(rec_model_name=rec_model, rec_model_backend=rec_backend, det_model_name=det_model,det_model_backend=det_backend,
det_more_configs=dict(rotated_bbox=True, use_angle_clf=False))
out = ocr.ocr(img_fp,
            resized_shape=int(sys.argv[6]),
            preserve_aspect_ratio=True,
            box_score_thresh=float(sys.argv[7]),
            min_box_size=int(sys.argv[8]))
print(json.dumps(out, cls=NpEncoder))
