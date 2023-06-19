python ./prepro/extract_frames.py \
--video_root_dir ./datasets/MSVD/raw_videos/ \
--save_dir ./datasets/MSVD/ \
--video_info_tsv ./datasets/MSVD/train.img.tsv \
--num_frames 16 \
# --debug
python ./prepro/create_image_frame_tsv.py \
--dataset MSVD \
--split training \
--image_size 224 \
--num_frames 16 \