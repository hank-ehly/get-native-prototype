class VideosController < ApplicationController
  before_action :set_video, only: [:show, :edit, :update, :destroy]

  # GET /videos
  # GET /videos.json
  def index

    if params[:language]
      l = Language.find_by(name: params[:language])
      @videos = Video.where(language_id: l.id)
      render json: { videos: @videos.to_json(include: [:category, :topic, :speaker]) }  
    end

    if params[:resource]
      # this is an arbitrary call to fetch a video's associated resource
      v = Video.find(params[:videoId])
      resource = Hash.new()
      case params[:resource]
      when 'writing_prompts'
        resource = v.writing_prompts
      end
      render json: { resource: resource.to_json, resourceType: params[:resource], topic: v.topic }
    end

    

  end

  # GET /videos/1
  # GET /videos/1.json
  def show

    render json: {
      video: @video.to_json(include: [:topic, :speaker]),
      video_scripts: VideoScript.where(video_id: @video.id).to_json(include: [:language])
    }

  end

  # GET /videos/new
  def new
    @video = Video.new
  end

  # GET /videos/1/edit
  def edit
  end

  # POST /videos
  # POST /videos.json
  def create
    @video = Video.new(video_params)

    respond_to do |format|
      if @video.save
        format.html { redirect_to @video, notice: 'Video was successfully created.' }
        format.json { render :show, status: :created, location: @video }
      else
        format.html { render :new }
        format.json { render json: @video.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /videos/1
  # PATCH/PUT /videos/1.json
  def update
    respond_to do |format|
      if @video.update(video_params)
        format.html { redirect_to @video, notice: 'Video was successfully updated.' }
        format.json { render :show, status: :ok, location: @video }
      else
        format.html { render :edit }
        format.json { render json: @video.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /videos/1
  # DELETE /videos/1.json
  def destroy
    @video.destroy
    respond_to do |format|
      format.html { redirect_to videos_url, notice: 'Video was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def video_params
      params.require(:video).permit(:speaker_id, :topic_id, :language_id, :category_id, :code)
    end
end
