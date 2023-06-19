python ./prepro/extract_frames.py \
--video_root_dir ./datasets/YouCook2/raw_videos/training/ \
--save_dir ./datasets/YouCook2/ \
--video_info_tsv ./datasets/YouCook2/training.img.tsv \
--num_frames 128 \
# --debug
python ./prepro/create_image_frame_tsv.py \
--dataset YouCook2 \
--split training \
--image_size 256 \
--num_frames 128 \

python ./prepro/extract_frames.py \
--video_root_dir ./datasets/YouCook2/raw_videos/validation/ \
--save_dir ./datasets/YouCook2/ \
--video_info_tsv ./datasets/YouCook2/validation.img.tsv \
--num_frames 128 \
# --debug
python ./prepro/create_image_frame_tsv.py \
--dataset YouCook2 \
--split validation \
--image_size 256 \
--num_frames 128 \