# ShortSpark
First half of 2023  AI Department Creative Autonomous Research (S.E.L.F.) Activities

# Requirements
 we provide requirement.txt file to setting virtual environment
    ```bash
    pip install -r requirements.txt
    ```
 
 # Dataset setting
 1. Create folders that store pretrained models, datasets, and predictions.
    ```bash
    export REPO_DIR=$PWD
    mkdir -p $REPO_DIR/models  # pre-trained models
    mkdir -p $REPO_DIR/datasets  # datasets
    mkdir -p $REPO_DIR/predictions  # prediction outputs
    ```
2. Download dataset for training and testing
Due to copyright issue, we could not release the raw videos.


# TSV file making
    ```bash
    python prepro/tsv_preproc_msvd.py
    ```
    
# inference
```bash
# After launching the docker container 
EVAL_DIR='./SwinBERT_3/output/msvd_16frm_default/checkpoint-3-3321/'
CHECKPOINT='./SwinBERT_3/output/msvd_16frm_default/checkpoint-3-3321/model.bin'
VIDEO='./SwinBERT_3/docs/4E72jTVs2YE.mp4'
CUDA_VISIBLE_DEVICES=0 python src/tasks/run_caption_VidSwinBert_inference.py \
       --resume_checkpoint $CHECKPOINT  \
       --eval_model_dir $EVAL_DIR \
       --test_video_fname $VIDEO \
       --do_lower_case \
       --do_test 
```

# testing
```bash
# Assume in the docker container 
EVAL_DIR='./models/table1/msvd/best-checkpoint/'
CUDA_VISIBLE_DEVICES=0 python src/tasks/run_caption_VidSwinBert.py \
       --val_yaml MSVD/val_32frames.yaml  \
       --do_eval true \
       --do_train false \
       --eval_model_dir $EVAL_DIR
```

#training
python src/tasks/run_caption_VidSwinBert.py
        --config src/configs/VidSwinBert/msvd_8frm_default.json
        --train_yaml MSVD/train_32frames.yaml
        --val_yaml MSVD/val_32frames.yaml
        --per_gpu_train_batch_size 6
        --per_gpu_eval_batch_size 6
        --num_train_epochs 15
        --learning_rate 0.0003
        --max_num_frames 32
        --pretrained_2d 0
        --backbone_coef_lr 0.05
        --mask_prob 0.5
        --max_masked_token 45
        --zero_opt_stage 1
        --mixed_precision_method deepspeed
        --deepspeed_fp16
        --gradient_accumulation_steps 1
        --learn_mask_enabled
        --loss_sparse_w 0.5
        --output_dir ./output
```
